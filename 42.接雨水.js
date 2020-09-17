/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0;
  res = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < leftMax) res += leftMax - height[left];
      else leftMax = height[left];
      left++;
    } else {
      if (height[right] < rightMax) res += rightMax - height[right];
      else rightMax = height[right];
      right--;
    }
  }

  return res;
}
// @lc code=end
