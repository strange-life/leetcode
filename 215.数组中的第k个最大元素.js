/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  /**
   * @param {number[]} nums
   * @param {number} i
   * @param {number} j
   */
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  /**
   * @param {number[]} nums
   * @param {number} i
   * @param {number} size
   */
  function maxHeapify(nums, root, size = nums.length) {
    const l = root * 2 + 1,
      r = root * 2 + 2;
    let max = root;

    if (l < size && nums[l] > nums[max]) max = l;
    if (r < size && nums[r] > nums[max]) max = r;

    if (max !== root) {
      swap(nums, root, max);
      maxHeapify(nums, max, size);
    }
  }

  for (let i = Math.trunc(nums.length / 2); i >= 0; i--) {
    maxHeapify(nums, i);
  }

  for (let i = nums.length - 1; i > nums.length - k; i--) {
    swap(nums, 0, i);
    maxHeapify(nums, 0, i);
  }

  return nums[0];
}
// @lc code=end
