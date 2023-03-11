// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffle = (nums, n) => {
  const arrayX = nums.slice(0, n);
  const arrayY = nums.slice(n);
  let formattedArray = [];
  for (let i = 0; i < arrayX.length; i++) {
    formattedArray.push(arrayX[i]);
    formattedArray.push(arrayY[i]);
  }
  return formattedArray;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

const nums = [1, 2, 3, 4, 5, 6];

// console.log(nums.slice(0, nums.length / 2));
// console.log(nums.slice(nums.length / 2));
