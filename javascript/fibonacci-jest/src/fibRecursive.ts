export function fibRecursive(n: number, memo: any = {}): number {
  // Handle base cases
  if (n in memo) return memo[n];
  if (n === 1) return 1;
  if (n < 0) return 0;

  memo[n] = fibRecursive(n - 1, memo) + fibRecursive(n - 2, memo);
  return memo[n];
}
