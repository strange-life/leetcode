/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
function postorderTraversal(root) {
  const values = [];
  if (!root) return values;

  const stack = [root];

  do {
    const current = stack.pop();

    values.unshift(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  } while (stack.length);

  return values;
}
// @lc code=end
