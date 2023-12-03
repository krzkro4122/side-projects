from sympy import Mul
import torch
import torch.nn as nn

from torch.nn import functional as F

# hyper parameters
batch_size = 32  # no of independent sequences processed in parallel
block_size = 8  # maximum context length for predictions
max_iterations = 5000
evaluation_interval = 500
learning_rate = 1e-3
device = 'cuda' if torch.cuda.is_available() else 'cpu'
evaluation_iterations = 200
train_test_ratio = 0.9
no_of_embedding_dimensions = 32

torch.manual_seed(1337)


with open("./tiny_shakespear.txt", 'r', encoding='utf-8') as handle:
    text = handle.read()

characters = sorted(list(set(text)))
vocabulary_size = len(characters)

string_to_int = {char: index for index, char in enumerate(characters)}
int_to_string = {index: char for index, char in enumerate(characters)}

encode = lambda string: [string_to_int[character] for character in string]
decode = lambda list_of_integers: ''.join([int_to_string[integer] for integer in list_of_integers])


data = torch.tensor(encode(text), dtype=torch.long)
n = int(train_test_ratio * len(data))
train_data = data[:n]
validation_data = data[n:]

def get_batch(split):
    data = train_data if split == 'train' else validation_data
    ix = torch.randint(
        len(data) - block_size,
        (batch_size,)
    )
    x = torch.stack([
        data[i: i + block_size]
        for i in ix
    ])
    y = torch.stack([
        data[i + 1: i + block_size + 1]
        for i in ix
    ])
    x, y = x.to(device), y.to(device)
    return x, y


@torch.no_grad()
def estimate_loss():
    out = {}
    model.eval()

    for split in ['train', 'validation']:
        losses = torch.zeros(evaluation_iterations)

        for k in range(evaluation_iterations):
            X, Y = get_batch(split)
            logits, loss = model(X, Y)
            losses[k] = loss.item()

        out[split] = losses.mean()

    model.train()
    return out


class Head(nn.Module):
    """One head of self-attention"""

    def __init__(self, head_size):
        super().__init__()
        self.key = nn.Linear(no_of_embedding_dimensions, head_size, bias=False)
        self.query = nn.Linear(no_of_embedding_dimensions, head_size, bias=False)
        self.value = nn.Linear(no_of_embedding_dimensions, head_size, bias=False)
        self.register_buffer('tril', torch.tril(torch.ones(block_size, block_size)))

    def forward(self, x):
        B, T, C = x.shape

        k = self.key(x)     # (B, T, C)
        q = self.query(x)   # (B, T, C)

        # compute affinities (attention scores)
        weights = q @ k.transpose(-2, -1) * C**-0.5  # (B, T, C) @ (B, C, T) -> (B, T, T)
        weights = weights.masked_fill(self.tril[:T, :T] == 0, float('-inf'))  # (B, T, T)
        weights = F.softmax(weights, dim=-1)  # (B, T, T)

        # perform the weighted aggregation of values
        v = self.value(x)  # (B, T, C)
        output = weights @ v  # (B, T, T) @ (B, T, C) -> (B, T, C)
        return output


class MultiHeadAttention(nn.Module):
    """Multiple heads of self-attention in parallel"""

    def __init__(self, no_of_heads, head_size):
        super().__init__()
        self.heads = nn.ModuleList([Head(head_size) for _ in range(no_of_heads)])

    def forward(self, x):
        return torch.cat([head(x) for head in self.heads], dim=-1)


class BigramLanguageModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.token_embedding_table = nn.Embedding(vocabulary_size, no_of_embedding_dimensions)
        self.position_embedding_table = nn.Embedding(block_size, no_of_embedding_dimensions)
        self.self_attention_heads = MultiHeadAttention(4, no_of_embedding_dimensions // 4)  # i.e. 4 heads of 8-dimensional self-attention
        self.language_model_head = nn.Linear(no_of_embedding_dimensions, vocabulary_size)

    def forward(self, idx, targets = None):
        B, T = idx.shape

        token_embedding = self.token_embedding_table(idx)  # (B, T, C)
        positional_embedding = self.position_embedding_table(torch.arange(T, device=device))  # (T, C)
        x = token_embedding + positional_embedding  # (B, T, C)
        x = self.self_attention_head(x)  # apply one head of self attention (B, T, C)
        logits = self.language_model_head(x)  # (B, T, vocabulary_size)

        if targets is None:
            loss = None
        else:
            B, T, C = logits.shape
            logits = logits.view(B * T, C)
            targets = targets.view(B * T)
            loss = F.cross_entropy(logits, targets)

        return logits, loss

    def generate(self, idx, max_new_tokens):
        # idx is (B, T) array of indices in the current context
        for _ in range(max_new_tokens):
            # crop idx to the last block_size tokens
            idx_cropped = idx[:, -block_size:]
            # get the predictions
            logits, loss = self(idx_cropped)
            # focus only on the last time step
            logits = logits[:, -1, :]
            # apply softmasx to get probabilities
            probs = F.softmax(logits, dim=-1)
            # sample from the distribution
            idx_next = torch.multinomial(probs, num_samples=1)
            # append sampled index to the running sequence
            idx = torch.cat((idx, idx_next), dim=1)  # (B, T + 1)
        return idx

model = BigramLanguageModel()
model = model.to(device)


optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)


for iteration in range(max_iterations):

    if iteration % evaluation_interval == 0:
        losses = estimate_loss()
        print(f"Step #{iteration}: train loss = {losses['train']:.4f}, validation loss = {losses['validation']:.4f}")

    xb, yb = get_batch('train')

    logits, loss = model(xb, yb)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()


context = torch.zeros((1, 1), dtype=torch.long, device=device)
print(decode(model.generate(context, max_new_tokens=500)[0].tolist()))
