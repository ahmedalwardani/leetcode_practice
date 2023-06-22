// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

const removeTrailingZeros = (num) => {
  const numAsArray = num.split("");
  for (let i = numAsArray.length - 1; i >= 0; i--) {
    if (numAsArray[i] !== "0") {
      break;
    }
    if (numAsArray[i] === "0") {
      numAsArray.pop();
    }
  }
  return numAsArray.join("");
};

const removeTrailingZeros2 = function (num) {
  return num.replace(/0+$/, "");
};