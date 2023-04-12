// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

const percentageLetter = (s, letter) => {
  let letterCounter = 0;
  for (const char of s) {
    if (char === letter) {
      letterCounter += 1;
    }
  }
  return Math.floor((letterCounter / s.length) * 100);
};

console.log(percentageLetter("foobar", "o"));
