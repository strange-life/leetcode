/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @returns {number[][]}
 */
function levelOrder(root) {
  const values = [];
  if (!root) return values;

  const queue = [root];

  do {
    const count = queue.length;
    const temp = Array(count);

    for (let i = 0; i < count; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      temp[i] = node.val;
    }

    values.push(temp);
  } while (queue.length);

  return values;
}
// @lc code=end
