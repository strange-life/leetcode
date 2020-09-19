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
  const SEG_COUNT = 4;
  const ADDR_MAX = 255;
  const ADDR_MAX_COUNT = 3;
  const numMap = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

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

    for (
      let i = index, addr = numMap[s[i]];
      addr <= ADDR_MAX && i < s.length;
      i++, addr = addr * 10 + numMap[s[i]]
    ) {
      const left = s.length - i - 1;
      const leftSeg = SEG_COUNT - seg - 1;
      if (left < leftSeg) break;
      if (left > ADDR_MAX_COUNT * leftSeg) continue;

      segments[seg] = addr;
      _restoreIpAddresses(seg + 1, i + 1);
    }
  }

  _restoreIpAddresses();

  return res;
}
// @lc code=end
