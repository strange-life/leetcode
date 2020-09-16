/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  const numMap = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  const SEG_COUNT = 4;
  const segments = Array(SEG_COUNT);
  const res = [];

  /**
   * @param {number} seg
   * @param {number} start
   */
  function _restoreIpAddresses(seg = 0, index = 0) {
    if (seg === SEG_COUNT) {
      if (index === s.length) res.push(segments.join('.'));
      return;
    }

    if (index === s.length) return;

    if (s[index] === '0') {
      segments[seg] = 0;
      _restoreIpAddresses(seg + 1, index + 1);
      return;
    }

    let addr = 0;
    for (let i = index; i < s.length; i++) {
      addr = addr * 10 + numMap[s[i]];
      if (addr > 255) break;
      if (s.length - i - 1 > 3 * (SEG_COUNT - seg - 1)) continue;

      segments[seg] = addr;
      _restoreIpAddresses(seg + 1, i + 1);
    }
  }

  _restoreIpAddresses();

  return res;
}
// @lc code=end
