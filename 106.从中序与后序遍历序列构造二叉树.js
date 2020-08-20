/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @returns {TreeNode}
 */
function buildTree(inorder, postorder) {
  let postIndex = postorder.length - 1;
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

    const root = new TreeNode(postorder[postIndex]);
    const rootIndex = inMap.get(root.val);

    postIndex--;
    // 由于是后续遍历，一定要先构造右子树
    root.right = _buildTree(rootIndex + 1, inEnd);
    root.left = _buildTree(inStart, rootIndex - 1);

    return root;
  }

  return _buildTree();
}
// @lc code=end
