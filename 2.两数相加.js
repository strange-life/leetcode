/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const sentinel = new ListNode();
  let current = sentinel,
    carry = 0;

  while (l1 || l2) {
    const value = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

    carry = Math.trunc(value / 10);
    current.next = new ListNode(value % 10);
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry) current.next = new ListNode(carry);

  return sentinel.next;
}
// @lc code=end
