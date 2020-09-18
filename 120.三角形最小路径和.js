/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  if (!triangle.length) return 0;

  let row1 = null,
    row2 = Array.from(triangle[triangle.length - 1]);

  for (let i = triangle.length - 2; i >= 0; i--) {
    row1 = row2;
    row2 = Array.from(triangle[i]);

    for (let j = 0; j < row2.length; j++) {
      row2[j] += Math.min(row1[j], row1[j + 1]);
    }
  }

  return row2[0];
}
// @lc code=end
