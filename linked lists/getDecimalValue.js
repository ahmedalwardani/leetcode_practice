// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = (head) => {
  const binaryArray = generateLinkedListNodeValues(head);
  return parseInt(binaryArray.join(""), 2);
};

const generateLinkedListNodeValues = (head) => {
  const nodeValuesArray = [];
  let currentNode = head;
  while (currentNode) {
    nodeValuesArray.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return nodeValuesArray;
};
