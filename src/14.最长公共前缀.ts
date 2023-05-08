/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let i = 0;
  for (; i < strs[0].length; i++) {
    const ch = strs[0][i];
    if (strs.slice(1).some(str => str[i] !== ch)) {
      break;
    }
  }
  return strs[0].substring(0, i);
}
// @lc code=end
