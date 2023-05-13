// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

const areAlmostEqual = (s1, s2) => {
  if (s1 === s2) return true;

  let differenceIndicesArray = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      differenceIndicesArray.push(i);
      if (differenceIndicesArray.length > 2) return false;
    }
  }
  return (
    s1[differenceIndicesArray[0]] === s2[differenceIndicesArray[1]] &&
    s1[differenceIndicesArray[1]] === s2[differenceIndicesArray[0]]
  );
};
