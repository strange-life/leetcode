/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const numMap = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  const res = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      res[i + j + 1] += numMap[num1[i]] * numMap[num2[j]];
    }
  }

  for (let i = res.length - 1; i > 0; i--) {
    res[i - 1] += Math.trunc(res[i] / 10);
    res[i] %= 10;
  }

  if (res[0] === 0) res[0] = '';

  return res.join('');
}
// @lc code=end
