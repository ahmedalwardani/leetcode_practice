const areOccurrencesEqual = (string) => {
  const charactersCount = {};
  for (const character of string) {
    if (charactersCount[character]) {
      charactersCount[character] += 1;
    } else {
      charactersCount[character] = 1;
    }
  }
  return new Set(Object.values(charactersCount)).size === 1 ? true : false;
};
