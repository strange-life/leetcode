/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x === 0) return 0;
  let prev = x;

  while (true) {
    const curr = 0.5 * (prev + x / prev);
    if (prev - curr < 1e-7) return Math.trunc(curr);
    prev = curr;
  }
  // let low = 0,
  //   high = x,
  //   res = 0;

  // while (low <= high) {
  //   const mid = low + Math.trunc((high - low) / 2);

  //   if (mid ** 2 > x) {
  //     high = mid - 1;
  //   } else {
  //     res = mid;
  //     low = mid + 1;
  //   }
  // }

  // return res;
}
// @lc code=end
