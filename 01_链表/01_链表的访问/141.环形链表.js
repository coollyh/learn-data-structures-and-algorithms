/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 快慢指针判断是否有环

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false
  let p = head, q = head
  while (q && q.next) {
    p = p.next
    q = q.next.next
    if (p === q) {
      return true
    }
  }
  return false
};
// @lc code=end

