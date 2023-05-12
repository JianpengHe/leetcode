export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const arrayToListNode = (arr: number[]): ListNode | null => {
  if (!arr.length) {
    return null;
  }
  const o = new ListNode(arr.shift());
  let now = o;
  for (const val of arr) {
    now = now.next = new ListNode(val, null);
  }
  return o;
};

export const ListNodeToArray = (node: ListNode | null, taget: number[] = []) => {
  if (!node) return taget;
  taget.push(node.val);
  return ListNodeToArray(node.next, taget);
};
