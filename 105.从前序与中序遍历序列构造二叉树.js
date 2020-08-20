/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  let preIndex = 0;
  const inMap = inorder.reduce(function (acc, val, index) {
    acc.set(val, index);

    return acc;
  }, new Map());

  /**
   * @param {number} inStart
   * @param {number} inEnd
   * @returns {TreeNode}
   */
  function _buildTree(inStart = 0, inEnd = inorder.length - 1) {
    if (inStart > inEnd) return null;

    const root = new TreeNode(preorder[preIndex]);
    const inIndex = inMap.get(root.val);

    preIndex++;
    // 前序遍历先构造左子树
    root.left = _buildTree(inStart, inIndex - 1);
    root.right = _buildTree(inIndex + 1, inEnd);

    return root;
  }

  return _buildTree();
}
// @lc code=end
