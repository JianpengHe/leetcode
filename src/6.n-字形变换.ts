/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] N 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let out = Array(numRows).fill("");
  /** 每一组需要的字符 */
  const perGroup = 2 * numRows - 2;
  /** 模板 */
  //   const template: number[][] = [[0]];
  //   for (let line = 1; line < numRows - 1; line++) {
  //     template[line] = [line, perGroup - line];
  //   }
  //   template[numRows - 1] = [perGroup / 2];
  /** 一组 [[0],[1,5],[2,4],[3]]
   * 0 . .
   * 1 . 5
   * 2 4 .
   * 3 . .
   */

  for (let index = 0; index < s.length; index += perGroup) {
    const str = s.substr(index, perGroup);
    out[0] += str[0];
    for (let line = 1; line < numRows - 1; line++) {
      out[line] += (str[line] ?? "") + (str[perGroup - line] ?? "");
    }
    out[numRows - 1] += str[perGroup / 2] ?? "";
  }

  return out.join("");
}
// @lc code=end
console.log(convert("PAYPALISHIRING", 4));
