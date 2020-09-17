/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    if (set.has(num - 1)) continue;

    let count = 1;
    while (set.has(num + count)) count++;
    max = Math.max(max, count);
  }

  return max;
}
// @lc code=end
