/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  /**
   * @param {TreeNode} a
   * @param {TreeNode} b
   * @returns {boolean}
   */
  function _isSymmetric(a, b) {
    if (!a && !b) return true;
    if (!a || !b || a.val !== b.val) return false;

    return _isSymmetric(a.left, b.right) && _isSymmetric(a.right, b.left);
  }

  return !root || _isSymmetric(root.left, root.right);
}
// @lc code=end
