/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs.length) return '';

  /**
   * @param {string} start
   * @param {string} end
   * @returns {string}
   */
  function _longestCommonPrefix(str1, str2) {
    const minLength = Math.min(str1.length, str2.length);

    for (let i = 0; i < minLength; i++) {
      if (str1[i] !== str2[i]) return str1.slice(0, i);
    }

    return str1.slice(0, minLength);
  }

  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    res = _longestCommonPrefix(res, strs[i]);
    if (!res) break;
  }

  return res;
}
// @lc code=end
