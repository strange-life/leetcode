/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root, sum) {
  const res = [],
    path = [];

  /**
   * @param {TreeNode} root
   * @param {number} sum
   * @param {number[]} path
   */
  function _pathSum(root, sum) {
    if (!root) return;

    path.push(root.val);
    sum -= root.val;

    if (sum === 0 && !root.left && !root.right) res.push(Array.from(path));

    _pathSum(root.left, sum);
    _pathSum(root.right, sum);
    path.pop();
  }

  _pathSum(root, sum);

  return res;
}
// @lc code=end
