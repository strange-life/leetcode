/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const CODE_A = 97;
  const s1Map = Array(26).fill(0);
  const s2Map = Array(26).fill(0);

  /**
   * @param {string[]} s1
   * @param {string[]} s2
   * @returns {boolean}
   */
  function matches(s1, s2) {
    return s1.every((char, index) => char === s2[index]);
  }

  for (let i = 0; i < s1.length; i++) {
    s1Map[s1.charCodeAt(i) - CODE_A]++;
    s2Map[s2.charCodeAt(i) - CODE_A]++;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (matches(s1Map, s2Map)) return true;
    s2Map[s2.charCodeAt(i + s1.length) - CODE_A]++;
    s2Map[s2.charCodeAt(i) - CODE_A]--;
  }

  return matches(s1Map, s2Map);
}
// @lc code=end
