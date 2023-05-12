/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let out = parseInt(s);
  out = isNaN(out) ? 0 : out;

  return Math.min(2147483647, Math.max(-2147483648, out));
}
// @lc code=end
