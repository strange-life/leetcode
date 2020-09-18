/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
class Node {
  constructor(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.map = new Map();
    this.sentinel = new Node();
    this.sentinel.prev = this.sentinel.next = this.sentinel;
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this.moveToHead(node);

    return node.val;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);

      node.val = value;
      this.moveToHead(node);
    } else {
      const node = new Node(key, value);

      this.map.set(key, node);
      this.addToHead(node);
      this.length++;

      if (this.length > this.capacity) {
        const last = this.sentinel.prev;

        this.map.delete(last.key);
        this.removeNode(last);
        this.length--;
      }
    }
  }

  /**
   * @param {Node} node
   */
  addToHead(node) {
    node.prev = this.sentinel;
    node.next = this.sentinel.next;
    this.sentinel.next.prev = node;
    this.sentinel.next = node;
  }

  /**
   * @param {Node} node
   */
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  /**
   * @param {Node} node
   */
  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
