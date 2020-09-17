/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const index = res.length - 1;

    if (res[index][1] < intervals[i][0]) res.push(intervals[i]);
    else res[index] = [res[index][0], Math.max(res[index][1], intervals[i][1])];
  }

  return res;
}
// @lc code=end
