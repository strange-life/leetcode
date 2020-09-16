/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  let max = 0;

  function _maxAreaOfIsland(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row === grid.length ||
      col === grid[0].length ||
      grid[row][col] === 0
    )
      return 0;

    let res = 1;
    grid[row][col] = 0;

    res +=
      _maxAreaOfIsland(row - 1, col) +
      _maxAreaOfIsland(row + 1, col) +
      _maxAreaOfIsland(row, col - 1) +
      _maxAreaOfIsland(row, col + 1);

    return res;
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      max = Math.max(max, _maxAreaOfIsland(row, col));
    }
  }

  return max;
}
// @lc code=end
