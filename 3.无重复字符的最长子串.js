/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const dict = {};
  let i = -1,
    max = 0;

  for (let j = 0; j < s.length; j++) {
    if (dict[s[j]] !== undefined) i = Math.max(i, dict[s[j]]);

    dict[s[j]] = j;
    max = Math.max(max, j - i);
  }

  return max;
}
// @lc code=end
