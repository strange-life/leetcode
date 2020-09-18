/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
    if (this.minStack.length) {
      this.minStack.push(Math.min(x, this.minStack[this.minStack.length - 1]));
    } else {
      this.minStack.push(x);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
