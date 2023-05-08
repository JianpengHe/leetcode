/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let o: ListNode | null = null;
  let p: ListNode | null = o;
  const add = list => {
    if (p) {
      p.next = list;
      p = list;
    } else {
      p = o = list;
    }
  };
  while (list1 || list2) {
    if (!list1 && list2) {
      add(list2);
      list2 = list2.next;
    } else if (!list2 && list1) {
      add(list1);
      list1 = list1.next;
    } else if (list1 && list2) {
      if (list1.val < list2.val) {
        add(list1);
        list1 = list1.next;
      } else {
        add(list2);
        list2 = list2.next;
      }
    }
  }
  return o;
}
// @lc code=end
