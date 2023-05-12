/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const out: string[] = [];
  const temp: string[] = [];
  /** 左括号总数 */
  let l = 0;
  /** 右括号总数 */
  let r = 0;
  const dfs = () => {
    if (r === n && l === n) {
      out.push(temp.join(""));
      return;
    }

    if (l < n) {
      l++;
      temp.push("(");
      dfs();
      l--;
      temp.pop();
    }

    if (r < l) {
      r++;
      temp.push(")");
      dfs();
      r--;
      temp.pop();
    }
  };
  dfs();
  return out;
}
// @lc code=end
console.log(generateParenthesis(3));
