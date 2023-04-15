// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

const vowels = ["a", "e", "i", "o", "u"];

const halvesAreAlike = (s) => {
  const substringOneVowels = s
    .slice(0, s.length / 2)
    .toLowerCase()
    .split("")
    .filter((letter) => vowels.includes(letter));
  const substringTwoVowels = s
    .slice(s.length / 2)
    .toLowerCase()
    .split("")
    .filter((letter) => vowels.includes(letter));
  return substringOneVowels.length === substringTwoVowels.length;
};
