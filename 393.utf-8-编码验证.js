/*
 * @lc app=leetcode.cn id=393 lang=javascript
 *
 * [393] UTF-8 编码验证
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
function validUtf8(data) {
  const mask1 = 1 << 7;
  const mask2 = 1 << 6;
  let left = 0;

  for (const num of data) {
    if (left === 0) {
      let mask = 1 << 7;
      while (num & mask) {
        left++;
        mask >>= 1;
      }

      if (left === 0) continue;

      if (left === 1 || left > 4) return false;
    } else {
      if (!(num & mask1) || num & mask2) return false;
    }

    left--;
  }

  return left === 0;
}
// @lc code=end
