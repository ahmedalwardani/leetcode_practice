// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

const uniqueOccurrences = (arr) => {
  let occurrencesObject = {};
  for (const number of arr) {
    if (occurrencesObject[number]) {
      occurrencesObject[number] += 1;
    } else {
      occurrencesObject[number] = 1;
    }
  }
  return (
    new Set(Object.values(occurrencesObject)).size ===
    Object.values(occurrencesObject).length
  );
};
