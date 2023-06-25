// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

const checkString = (s) =>
  JSON.stringify(s.split("")) === JSON.stringify(s.split("").sort());

const checkString2 = (s) => {
  if (!s.includes("b")) return true;
  let firstB = s.indexOf("b");

  for (let i = firstB; i < s.length; i++) {
    if (s[i] === "a") return false;
  }

  return true;
};
