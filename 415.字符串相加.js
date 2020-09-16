/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
  const numMap = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  let res = '';

  for (
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    i >= 0 || j >= 0 || add > 0;
    i--, j--
  ) {
    const n1 = numMap[num1[i]] ?? 0;
    const n2 = numMap[num2[j]] ?? 0;
    const sum = n1 + n2 + add;

    res = (sum % 10) + res;
    add = Math.trunc(sum / 10);
  }

  return res;
}
// @lc code=end
