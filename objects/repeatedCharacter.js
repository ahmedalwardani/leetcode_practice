const repeatedCharacter = (s) => {
  const occurrencesObject = {};
  for (const letter of s) {
    if (occurrencesObject[letter]) {
      return letter;
    }
    occurrencesObject[letter] = true;
  }
};
