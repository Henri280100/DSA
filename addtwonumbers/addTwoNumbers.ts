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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbersTS = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let list = new ListNode();
  let head = list;

  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum !== 0) {
    if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
    }

    if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
    }

    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return list.next;
};

