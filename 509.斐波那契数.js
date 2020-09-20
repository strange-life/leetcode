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
  const MOD = 1e9 + 7;
  let prev = 0,
    curr = 1;

  for (let i = 0; i < N; i++) {
    const sum = (prev + curr) % MOD;
    prev = curr;
    curr = sum;
  }

  return prev;
}
// @lc code=end
