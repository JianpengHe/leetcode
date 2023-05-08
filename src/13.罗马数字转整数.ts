/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (const a of s.replace(/I[VX]|X[LC]|C[DM]/g, a => {
    sum += map[a[1]] - map[a[0]];
    return "";
  })) {
    sum += map[a];
  }
  return sum;
}
// @lc code=end
