// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

const averageValue = (nums) => {
  let sumOfEvenNumbersDivisibleByThree = 0;
  let countOfEvenNumbersDivisibleByThree = 0;
  for (let num of nums) {
    if (num % 6 === 0) {
      sumOfEvenNumbersDivisibleByThree += num;
      countOfEvenNumbersDivisibleByThree += 1;
    }
  }
  return sumOfEvenNumbersDivisibleByThree === 0
    ? sumOfEvenNumbersDivisibleByThree
    : Math.floor(
        sumOfEvenNumbersDivisibleByThree / countOfEvenNumbersDivisibleByThree
      );
};
