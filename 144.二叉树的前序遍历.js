/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @returns {number[]}
 */
function preorderTraversal(root) {
  const values = [];
  if (!root) return values;

  const stack = [root];

  do {
    const current = stack.pop();

    values.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  } while (stack.length);

  return values;
}
// @lc code=end
