/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (!matrix.length) return [];
  const res = [];

  let top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0;

  while (true) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    if (++top > bottom) break;

    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    if (--right < left) break;

    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    if (--bottom < top) break;

    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    if (++left > right) break;
  }

  return res;
}
// @lc code=end
