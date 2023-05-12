/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (n > 1000000) {
    n = (n % 2) + 1000000;
  } else if (n < -1000000) {
    n = (n % 2) - 1000000;
  }
  let out: number = 1;
  if (n > 0) {
    while (n--) {
      out *= x;
    }
    return out;
  }
  while (n++) {
    out *= 1 / x;
  }
  return out;
}
// @lc code=end
console.log(myPow(2, 10));
