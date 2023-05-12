/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(root: ListNode, n: number): ListNode | null {
  /** 套个根节点，省得向前越界 */
  const head = new ListNode(0, root);
  let fast: ListNode | null = head;
  let slow: ListNode = head;

  /** 快慢指针，快指针先走n步 */
  for (let index = 0; index <= n; index++) {
    fast = (fast as ListNode).next;
  }

  /** 快慢指针一起走 */
  while (fast) {
    fast = fast.next;
    slow = slow.next as ListNode;
  }

  /** 快指针走到头了，慢指针删除节点 */

  /** 慢指针的next重新赋值为它下2个节点，即删除了中间的节点 */
  slow.next = (slow.next as ListNode).next;
  return head.next;
}
// @lc code=end
for (const [arg1, arg2, out] of [
  [[1], 1, []],
  [[1, 2], 1, [1]],
  [[1, 2], 2, [2]],
  [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
] as [number[], number, number[]][]) {
  console.log("-------", arrayToListNode([...arg1]));
  const ans = ListNodeToArray(removeNthFromEnd(arrayToListNode([...arg1]) as ListNode, arg2));
  if (JSON.stringify(ans) !== JSON.stringify(out)) {
    console.log(arg1, arg2);
    console.log("你的答案", ans, "期望", out);
  }
}
