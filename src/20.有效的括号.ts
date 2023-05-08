/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const start = "([{";
  const end = ")]}";
  const stack: string[] = [];
  for (const ch of s) {
    if (start.includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.pop() !== start[end.indexOf(ch)]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// @lc code=end
