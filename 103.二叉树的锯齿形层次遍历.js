/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  const values = [];
  if (!root) return values;

  const queue = [root];

  do {
    const count = queue.length;
    const temp = [];
    const func = values.length % 2 === 0 ? 'push' : 'unshift';

    for (let i = 0; i < count; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      temp[func](node.val);
    }

    values.push(temp);
  } while (queue.length);

  return values;
}
// @lc code=end
