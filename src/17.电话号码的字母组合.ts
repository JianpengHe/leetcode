/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const out: string[] = [];
  const temp: string[] = [];
  const dfs = (digitIndex = 0) => {
    if (digitIndex >= digits.length) {
      out.push(temp.join(""));
      return;
    }
    for (const ch of map[Number(digits[digitIndex]) - 2]) {
      temp.push(ch);
      dfs(digitIndex + 1);
      temp.pop();
    }
  };
  if (digits) dfs(0);
  return out;
}
// @lc code=end
console.log(letterCombinations("23"));
