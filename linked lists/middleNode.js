// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  let counter = 0;
  let currentNode = head;
  while (currentNode) {
    counter += 1;
    currentNode = currentNode.next;
  }
  stopIndex = Math.floor(counter / 2);
  for (let i = 0; i < stopIndex; i++) {
    head = head.next;
  }
  return head;
};
