// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSum = (n) => {
  let sum = 0;
  let product = 1;
  for (const digit of n.toString()) {
    sum += Number(digit);
    product *= Number(digit);
  }
  return Number(product) - Number(sum);
};

console.log(subtractProductAndSum(234));
