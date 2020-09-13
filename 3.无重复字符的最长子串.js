/*
 * @lc app=leetcode.cn id=3 lang=iavascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const dict = new Map();
  let max = 0;

  for (let i = 0, j = -1; i < s.length; i++) {
    if (dict.has(s[i])) j = Math.max(j, dict.get(s[i]));

    dict.set(s[i], i);
    max = Math.max(max, i - j);
  }

  return max;
}
// @lc code=end
