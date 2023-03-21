// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

const sumOfUnique = (nums) => {
  const arrayOfUniques = nums.filter(
    (num) => nums.filter((n) => n === num).length === 1
  );
  return arrayOfUniques.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfUnique());
