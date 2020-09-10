/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let weight = 0;

  while (n !== 0) {
    n &= n - 1;
    weight++;
  }

  return weight;
}
// @lc code=end
