/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  const segments = path.split('/');
  const stack = [];

  for (const segment of segments) {
    if (!segment) continue;

    if (segment === '..') {
      if (stack.length) stack.pop();
      continue;
    }

    if (segment !== '.') {
      stack.push(segment);
    }
  }

  return '/' + stack.join('/');
}
// @lc code=end
