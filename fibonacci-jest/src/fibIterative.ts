export function fibIterative(n: number): number {
  const fibArray: Array<number> = Array(n + 1).fill(0);
  fibArray[1] = 1;

  for (let i: number = 0; i <= n; i++) {
    fibArray[i + 1] += fibArray[i];
    fibArray[i + 2] += fibArray[i];
  }

  return fibArray[n];
}
