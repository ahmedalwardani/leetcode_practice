// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

const maximumValue = (strs) => {
  const transformedStrings = strs.map((str) =>
    isNaN(str) ? str.length : Number(str)
  );
  return Math.max(...transformedStrings);
};
