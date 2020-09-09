/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  // 用 typed array 优化空间复杂度
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp.reduce((acc, value) => Math.max(acc, value), 0);
}
// @lc code=end
