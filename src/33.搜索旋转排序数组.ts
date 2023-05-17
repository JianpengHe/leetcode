/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  //   console.log("ans", nums.indexOf(target));
  /** 数组偏移值 */
  let p = 0;
  let center = nums.length - 1;
  let n1 = 0,
    n2 = 0;
  while ((center = Math.floor(nums.length / 2))) {
    n1 = nums[0];
    n2 = nums[center];
    if (n1 === target) return p;
    if (n2 === target) return p + center;
    if (n1 < n2) {
      /** 连续区间在左边 */
      if (n1 < target && target < n2) {
        /** target在连续区间里 */
        /** 删掉右区间，并退出 */
        nums.splice(center);
        // console.log("连续区间在左边", nums);
        break;
      } else {
        /** 删掉连续的区间（左区间） */
        nums.splice(0, center + 1);
        p += center + 1;
      }
    } else {
      /** 连续区间在右边 */
      if (n2 < target && target < n1) {
        /** target在连续区间里 */
        nums.splice(0, center + 1);
        p += center + 1;
        // console.log("连续区间在右边", nums);
        break;
      } else {
        /** 删掉连续的区间（右区间） */
        nums.splice(center);
      }
    }
  }
  /** 连续区间用普通二分法就可以了 */
  //   console.log("连续区间用普通二分法就可以了", nums, p, target);
  //   return p + nums.indexOf(target);
  while (nums.length > 2 && (center = Math.floor(nums.length / 2))) {
    n2 = nums[center];
    if (n2 === target) return p + center;
    if (n2 > target) {
      /** 在左区间，需要删掉右区间 */
      nums.splice(center + 1);
      //   console.log(nums);
    } else {
      /** 在右区间，需要删掉左区间 */
      nums.splice(0, center + 1);
      p += center + 1;
    }
  }
  //   console.log("end", nums, p);
  n1 = nums.indexOf(target);
  if (n1 === -1) return n1;
  return p + n1;
}
// @lc code=end

// console.log(search([7, 8, 9, 0, 1, 2, 3, 4, 5, 6], 8));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 1));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 6));
// console.log(search([1, 3], 3));
console.log(
  search(
    [
      165, 166, 167, 170, 171, 172, 173, 175, 177, 179, 180, 183, 185, 190, 193, 198, 199, 201, 202, 207, 209, 211, 213, 216, 217, 221, 224, 225, 228, 235, 240, 241, 242, 245, 249, 254, 255, 256, 258, 261, 267, 271, 273,
      274, 275, 276, 285, 286, 290, 291, 294, 295, 297, 299, 0, 1, 2, 3, 4, 5, 6, 7, 13, 18, 20, 22, 28, 29, 30, 31, 33, 34, 36, 40, 42, 43, 46, 51, 53, 55, 57, 59, 60, 61, 64, 67, 68, 71, 76, 77, 78, 80, 83, 87, 88, 91,
      92, 94, 99, 103, 108, 112, 114, 115, 118, 119, 120, 121, 122, 123, 124, 125, 128, 129, 131, 134, 136, 139, 142, 143, 145, 146, 148, 153, 154, 155, 156, 157, 159, 160, 161, 162,
    ],
    250
  )
);

// console.log(
//   search(
//     [
//       216, 221, 222, 225, 228, 231, 234, 244, 245, 246, 249, 251, 259, 262, 264, 265, 268, 271, 276, 277, 278, 281, 282, 286, 289, 294, 295, 296, 298, 299, 0, 4, 9, 10, 13, 18, 23, 25, 26, 33, 34, 38, 39, 42, 43, 45, 48,
//       49, 51, 52, 53, 55, 58, 60, 61, 62, 63, 65, 66, 70, 72, 74, 78, 79, 82, 85, 89, 90, 91, 95, 104, 109, 112, 113, 117, 118, 120, 122, 123, 126, 127, 128, 133, 134, 138, 140, 142, 144, 147, 148, 149, 152, 156, 164,
//       165, 168, 169, 174, 177, 185, 191, 192, 193, 194, 195, 197, 204, 211, 215,
//     ],
//     0
//   )
// );
