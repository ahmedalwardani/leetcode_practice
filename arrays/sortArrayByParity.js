// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

const sortArrayByParity = (nums) => {
  let answer = [];
  nums.forEach((num) => {
    num % 2 === 0 ? answer.unshift(num) : answer.push(num);
  });
  return answer;
};
