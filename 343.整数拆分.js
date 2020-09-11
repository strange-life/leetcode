/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  if (n <= 3) return n - 1;

  const pow = Math.trunc(n / 3);
  const remainder = n % 3;

  if (remainder === 0) return 3 ** pow;
  if (remainder === 1) return 3 ** (pow - 1) * 4;
  return 3 ** pow * 2;
}
// @lc code=end
