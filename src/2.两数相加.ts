/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

import { ListNode } from "./types";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let yu = 0;
  const add = (list1: ListNode | null, list2: ListNode | null) => {
    if (list1 === null && list2 === null) {
      if (yu) {
        return { val: yu, next: null };
      }
      return null;
    }
    if (list1) {
      yu += list1.val;
    }
    if (list2) {
      yu += list2.val;
    }
    const val = yu % 10;
    yu /= 10;
    yu |= 0;
    return { val, next: add(list1?.next || null, list2?.next || null) };
  };
  return add(l1, l2);
}
// @lc code=end
