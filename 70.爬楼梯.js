/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let prev = 1,
    curr = 1;

  for (let i = 0; i < n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return prev;
}
// @lc code=end
