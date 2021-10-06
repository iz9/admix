export function times(amount: number, cb: (...args: any) => any) {
  let i = amount
  while (i > 0) {
    !void cb() && --i
  }
}
