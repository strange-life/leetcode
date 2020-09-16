/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const res = [];

  for (let i = 0; i < s.length; i++) {
    const blankIndex = s.indexOf(' ', i);
    if (blankIndex === i) continue;

    const word = s.slice(i, blankIndex === -1 ? s.length : blankIndex);
    res.unshift(word);
    i += word.length;
  }

  return res.join(' ');
}
// @lc code=end
