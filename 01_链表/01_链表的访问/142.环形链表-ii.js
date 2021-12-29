/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null
  let p = head, q = head
  while (q && q.next) {
    p = p.next
    q = q.next.next
    if (p === q) {
      let temp = head
      while (temp !== p) {
        temp = temp.next
        p = p.next
      }
      return temp
    }
  }
  return null
};
// @lc code=end

