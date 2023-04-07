// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const maximumWealth = (accounts) => {
  let maximumWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (reduceArray(accounts[i]) > maximumWealth) {
      maximumWealth = reduceArray(accounts[i]);
    }
  }
  return maximumWealth;
};

const reduceArray = (array) => {
  return array.reduce(
    (currentValue, accumulator) => currentValue + accumulator,
    0
  );
};
