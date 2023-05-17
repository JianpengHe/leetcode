/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

import { ListNode, ListNodeToArray, arrayToListNode } from "./types";

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

function swapPairs(head: ListNode | null): ListNode | null {
  const root = new ListNode(0, head);
  let node: ListNode | null = root;

  while (node && node.next && node.next.next) {
    /** 先删掉一个 */
    const deletedNode = node.next;
    node.next = node.next.next;
    /** del end */

    /** 下一个node */
    node = node.next;

    /** 把之前删掉的补回去 */
    deletedNode.next = node.next;
    node.next = deletedNode;
    /** add end */

    /** 下一个node */
    node = node.next;
  }

  return root.next;
}
// @lc code=end

console.log(ListNodeToArray(swapPairs(arrayToListNode([1, 2, 3, 4]))));
