/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  let res = '';
  let nums = Array(n);
  for (let i = 0; i < n; i++) {
    nums[i] = i + 1;
  }

  const factorial = [1, 1];
  for (let i = 2; i <= n; i++) factorial[i] = factorial[i - 1] * i;

  let currentK = k - 1;
  while (nums.length) {
    const count = factorial[nums.length - 1];
    const index = Math.trunc(currentK / count);

    res += nums.splice(index, 1);
    currentK -= index * count;
  }

  return res;
}
// @lc code=end
