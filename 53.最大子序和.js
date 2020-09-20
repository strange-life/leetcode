/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let current = 0,
    max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    max = Math.max(max, current);
  }

  return max;
}
// @lc code=end
