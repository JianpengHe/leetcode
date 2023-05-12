/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let out: number = 0;
  while (x >= 1 || x <= -1) {
    out *= 10;
    out += x % 10;

    x /= 10;
    x |= 0;
  }
  if (out > 2147483647 || out < -2147483648) {
    return 0;
  }
  return out;
}
// @lc code=end
console.log(reverse(-120));
