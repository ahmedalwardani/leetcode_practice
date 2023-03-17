// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

const sortPeople = (names, heights) => {
  let namesToHeightsMatrix = [];
  for (let i = 0; i < names.length; i++) {
    namesToHeightsMatrix.push([names[i], heights[i]]);
  }
  namesToHeightsMatrix.sort((b, a) => a[1] - b[1]);
  const sortedNamesArray = namesToHeightsMatrix.map(
    (nameToHeightCombination) => nameToHeightCombination[0]
  );
  return sortedNamesArray;
};
