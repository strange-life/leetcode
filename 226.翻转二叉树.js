/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) return null;
  const temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
}
// @lc code=end
