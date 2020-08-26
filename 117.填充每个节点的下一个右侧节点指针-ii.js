/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
  let head = root;

  while (head) {
    let current = head,
      prevChild = null;

    head = null;

    do {
      if (current.left) {
        if (prevChild) {
          prevChild.next = current.left;
        } else {
          head = current.left;
        }

        prevChild = current.left;
      }

      if (current.right) {
        if (prevChild) {
          prevChild.next = current.right;
        } else {
          head = current.right;
        }

        prevChild = current.right;
      }

      current = current.next;
    } while (current);
  }

  return root;
}
// @lc code=end
