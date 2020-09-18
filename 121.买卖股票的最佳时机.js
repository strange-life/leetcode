/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let res = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (const price of prices) {
    min = Math.min(min, price);
    res = Math.max(res, price - min);
  }

  return res;
}
// @lc code=end
