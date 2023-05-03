import pathlib

TEST_FILE_NAME = r'lca.txt'


class TreeNode:
    def __init__(self, x):
        if x != 'null':
            self.val = int(x)
        self.left: TreeNode
        self.right: TreeNode


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        current = root
        while current:
            if p.val > current.val and q.val > current.val:
                current = current.right
            elif p.val < current.val and q.val < current.val:
                current = current.left
            else:
                return current
        return current


def load_test_cases(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()
        line = iter(lines)
        commands = []
        try:
            while True:
                numbers = next(line)[1:-2].split(',')
                p = int(next(line))
                q = int(next(line))
                result = int(next(line))
                commands.append((numbers, p, q, result))
        except StopIteration:
            return commands


def construct_tree(tree_array, i, n) -> TreeNode:
    root: TreeNode = TreeNode(0)
    if i < n:
        root = TreeNode(tree_array[i])
        root.left = construct_tree(tree_array, 2 * i + 1, n)
        root.right = construct_tree(tree_array, 2 * i + 2, n)
    return root


def run_test(test_case):
    tree_array, p, q, answer = test_case
    p = TreeNode(p)
    q = TreeNode(q)
    n = len(tree_array)
    root = construct_tree(tree_array, 0, n)
    solution = Solution()
    result = solution.lowestCommonAncestor(root, p, q)
    return solution.lowestCommonAncestor(root, p, q).val == answer, result, answer


def main():
    test_file_path = pathlib.Path(__file__).parent.joinpath(TEST_FILE_NAME)
    test_cases = load_test_cases(test_file_path)
    for test_case in test_cases:
        passed, result, answer = run_test(test_case)
        print(f"{passed=} ({result.val=}, {answer=})")


if __name__ == "__main__":
    main()
