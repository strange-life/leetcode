/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @returns {Node}
 */
function connect(root) {
  if (!root) return null;

  for (let head = root; head.left; head = head.left) {
    for (let current = head; current; current = current.next) {
      current.left.next = current.right;
      if (current.next) current.right.next = current.next.left;
    }
  }

  return root;
}
// @lc code=end
