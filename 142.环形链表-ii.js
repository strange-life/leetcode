/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  let slow = head,
    fast = head,
    meet = null;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      meet = slow;
      break;
    }
  }

  if (meet) {
    let p1 = head,
      p2 = meet;

    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p1;
  }

  return null;
}
// @lc code=end
