/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  if (!lists.length) return null;

  /**
   * @param {ListNode} a
   * @param {ListNode} b
   * @returns {ListNode}
   */
  function mergeTwoLists(a, b) {
    const sentinel = new ListNode();
    let curr = sentinel;

    while (a && b) {
      if (a.val < b.val) {
        curr.next = a;
        a = a.next;
      } else {
        curr.next = b;
        b = b.next;
      }
      curr = curr.next;
    }
    curr.next = a ?? b;

    return sentinel.next;
  }

  /**
   * @param {ListNode[]} lists
   * @param {number} l
   * @param {number} r
   * @returns {ListNode}
   */
  function _mergeKLists(lists, l, r) {
    if (l === r) return lists[l];

    const mid = l + Math.trunc((r - l) / 2);
    return mergeTwoLists(
      _mergeKLists(lists, l, mid),
      _mergeKLists(lists, mid + 1, r),
    );
  }

  return _mergeKLists(lists, 0, lists.length - 1);
}
// @lc code=end
