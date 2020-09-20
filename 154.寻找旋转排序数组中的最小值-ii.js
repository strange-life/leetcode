/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
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

    if (nums[mid] < nums[high]) {
      high = mid;
      continue;
    }

    if (nums[mid] > nums[high]) {
      low = mid + 1;
      continue;
    }

    high--;
  }

  return nums[low];
}
// @lc code=end
