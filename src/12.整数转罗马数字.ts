/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
  const map: [string, number][] = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let out: string = "";

  do {
    if (num >= map[0][1]) {
      num -= map[0][1];
      out += map[0][0];
    } else {
      map.shift();
    }
  } while (num);
  return out;
}
// @lc code=end
intToRoman(1994);
