import os
from torch.utils.data import DataLoader
import torchvision.datasets as dset
import torchvision.transforms as transforms


def get_dataset(image_size=32):
    transform = transforms.Compose(
        [
            transforms.Resize(image_size),
            transforms.CenterCrop(image_size),
            transforms.ToTensor(),
            # transforms.Normalize(0.5, 0.5),
        ]
    )
    return dset.CIFAR10(
        root=os.path.abspath("./data"),
        download=True,
        transform=transform,
    )


dataset = get_dataset()


def get_dataloader(batch_size=1):
    return DataLoader(
        dataset if dataset else get_dataset(), batch_size=batch_size, num_workers=1
    )


if __name__ == "__main__":
    get_dataset()
