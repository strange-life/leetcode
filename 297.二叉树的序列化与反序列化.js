/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @returns {string}
 */
function serialize(root) {
  if (!root) return '#';

  return `${String(root.val)},${serialize(root.left)},${serialize(root.right)}`;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @returns {TreeNode}
 */
function deserialize(data) {
  let start = 0;

  /**
   * @returns {TreeNode}
   */
  function _deserialize() {
    const end = data.indexOf(',', start);
    const str = data.slice(start, end === -1 ? data.length : end);
    start = end + 1;

    if (str === '#') return null;

    const root = new TreeNode(Number(str));

    root.left = _deserialize();
    root.right = _deserialize();

    return root;
  }

  return _deserialize();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
