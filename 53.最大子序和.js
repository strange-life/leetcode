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
  if (!nums.length) return 0;

  let current = nums[0],
    max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    max = Math.max(max, current);
  }

  return max;
}
// @lc code=end
