/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    const mid = low + Math.trunc((high - low) / 2);

    if (nums[mid] < nums[high]) high = mid;
    else low = mid + 1;
  }

  return nums[low];
}
// @lc code=end
