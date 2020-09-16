/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  if (!nums.length) return -1;
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.trunc((high - low) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[0]) {
      if (target >= nums[0] && target < nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[nums.length - 1]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
}
// @lc code=end
