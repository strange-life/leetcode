/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  if (!matrix.length) return 0;

  let res = 0,
    row1 = null,
    row2 = Array.from(matrix[0]).map(Number);

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === '1') {
      res = 1;
      break;
    }
  }

  if (res === 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[0][i] === '1') {
        res = 1;
        break;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    row1 = row2;
    row2 = Array.from(matrix[i]).map(Number);

    for (let j = 1; j < matrix[0].length; j++) {
      if (row2[j] === 0) continue;
      row2[j] += Math.min(row2[j - 1], row1[j], row1[j - 1]);
      res = Math.max(res, row2[j]);
    }
  }

  return res ** 2;
}
// @lc code=end
