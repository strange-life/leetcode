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
  const dp = new Int32Array(nums.length);
  let res = 0;

  for (const num of nums) {
    let l = 0,
      r = res;

    while (l < r) {
      const mid = l + Math.trunc((r - l) / 2);
      if (dp[mid] < num) l = mid + 1;
      else r = mid;
    }

    dp[l] = num;
    if (r === res) res++;
  }

  return res;
}
// @lc code=end
