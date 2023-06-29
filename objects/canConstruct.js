// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {
  const magazineLettersObject = {};
  for (const letter of magazine) {
    magazineLettersObject[letter]
      ? (magazineLettersObject[letter] += 1)
      : (magazineLettersObject[letter] = 1);
  }
  for (const letter of ransomNote) {
    if (!magazineLettersObject[letter]) {
      return false;
    }
    magazineLettersObject[letter] -= 1;
  }
  return true;
};
