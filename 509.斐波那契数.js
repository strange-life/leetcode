/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @returns {number}
 */
function fib(N) {
  if (N < 1) return 0;
  let prev = 1,
    curr = 1;

  for (let i = 3; i <= N; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
}
// @lc code=end
