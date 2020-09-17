/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
function findCircleNum(M) {
  const visited = new Uint8Array(M.length);
  const queue = [];
  let res = 0;

  for (let i = 0; i < M.length; i++) {
    if (visited[i]) continue;

    queue.push(i);
    do {
      const s = queue.shift();

      visited[s] = 1;
      for (let j = 0; j < M.length; j++) {
        if (M[s][j] && !visited[j]) queue.push(j);
      }
    } while (queue.length);

    res++;
  }

  return res;
}
// @lc code=end
