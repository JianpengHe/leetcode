/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  const array: number[] = [];
  while (x >= 1) {
    array.push(x % 10);
    x /= 10;
    x |= 0;
  }
  for (let index = 0; index < ((array.length / 2) | 0); index++) {
    if (array[index] !== array[array.length - 1 - index]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
