/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let row = 0,
    col = (matrix[0]?.length ?? 0) - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] < target) {
      row++;
      continue;
    }

    if (matrix[row][col] > target) {
      col--;
      continue;
    }

    return true;
  }

  return false;
}
// @lc code=end
