/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
  if (!nums.length) return 0;

  let max = 1,
    current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }

  return max;
}
// @lc code=end
