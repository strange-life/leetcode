/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let first = 0; first < nums.length - 2; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) continue;

    const target = -nums[first];
    let third = nums.length - 1;

    for (let second = first + 1; second < nums.length - 1; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) continue;

      while (second < third && nums[second] + nums[third] > target) third--;

      if (second === third) break;
      if (nums[second] + nums[third] === target)
        res.push([nums[first], nums[second], nums[third]]);
    }
  }

  return res;
}
// @lc code=end
