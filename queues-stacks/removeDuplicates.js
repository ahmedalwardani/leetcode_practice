// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

const removeDuplicates = (s) => {
  let stack = [];
  for (const letter of s) {
    stack[stack.length - 1] === letter ? stack.pop() : stack.push(letter);
  }
  return stack.join("");
};
