/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
function maxEnvelopes(envelopes) {
  const dp = new Int32Array(envelopes.length);
  let res = 0;

  envelopes.sort(function (a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
  });

  for (const envelope of envelopes) {
    let l = 0,
      r = res;

    while (l < r) {
      const mid = l + Math.trunc((r - l) / 2);
      if (dp[mid] < envelope[1]) l = mid + 1;
      else r = mid;
    }

    dp[l] = envelope[1];
    if (l === res) res++;
  }

  return res;
}
// @lc code=end
