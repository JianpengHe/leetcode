/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  //   /** 相当于找最大和第二大的index */
  //   let max = 0,
  //     max2 = 0;

  //   let maxIndex = 0,
  //     max2Index = 0;
  //   for (let index = 0; index < height.length; index++) {
  //     if (max < height[index]) {
  //       max = height[index];
  //       maxIndex = index;
  //     } else if (max2 < height[index]) {
  //       max2 = height[index];
  //       max2Index = index;
  //     }
  //   }
  //   console.log(max, max2, maxIndex, max2Index);
  //   return max2 * Math.abs(max2Index - maxIndex);
  /** 首尾两个指针，往内移动 */
  let left = 0,
    right = height.length - 1;
  let area = 0;
  do {
    area = Math.max(area, (right - left) * Math.min(height[right], height[left]));
    /** 贪心一点，移动小的指针，大的不动 */
    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  } while (left !== right);
  return area;
}
// @lc code=end
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
