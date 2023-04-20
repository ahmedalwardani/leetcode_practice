// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

const maxNumberOfBalloons = (text) => {
  const occurrencesObject = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (const letter of text) {
    occurrencesObject[letter] += 1;
  }
  return Math.floor(
    Math.min(
      occurrencesObject.b,
      occurrencesObject.a,
      occurrencesObject.l / 2,
      occurrencesObject.o / 2,
      occurrencesObject.n
    )
  );
};
