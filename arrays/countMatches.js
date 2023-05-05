// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

const countMatches = (items, ruleKey, ruleValue) => {
  let matches = 0;
  let indexToSearch;
  switch (ruleKey) {
    case "type":
      indexToSearch = 0;
      break;
    case "color":
      indexToSearch = 1;
      break;
    case "name":
      indexToSearch = 2;
    default:
      break;
  }
  for (const item of items) {
    if (item[indexToSearch] === ruleValue) {
      matches += 1;
    }
  }
  return matches;
};
