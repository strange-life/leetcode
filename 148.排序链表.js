/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  const sentinel = new ListNode(0, head);
  let capacity = 1;

  let curr = head,
    length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }

  while (capacity < length) {
    let prev = sentinel,
      curr = sentinel.next;

    while (curr) {
      let h1 = curr,
        count = capacity;
      while (curr && count) {
        curr = curr.next;
        count--;
      }

      if (count) break;

      let h2 = curr;
      count = capacity;
      while (curr && count) {
        curr = curr.next;
        count--;
      }

      let count1 = capacity,
        count2 = capacity - count;
      while (count1 && count2) {
        if (h1.val < h2.val) {
          prev.next = h1;
          h1 = h1.next;
          count1--;
        } else {
          prev.next = h2;
          h2 = h2.next;
          count2--;
        }

        prev = prev.next;
      }
      prev.next = count1 ? h1 : h2;

      let left = count1 || count2;
      while (left--) prev = prev.next;

      prev.next = curr;
    }

    capacity *= 2;
  }

  return sentinel.next;
}
// @lc code=end
