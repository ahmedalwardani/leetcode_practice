// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

const capitalizeTitle = (title) => {
  let titleAsArray = title.split(" ");
  let capitalizedTitle = "";
  titleAsArray.forEach((title) => {
    if (title.length < 3) {
      capitalizedTitle += title.toLowerCase();
    } else {
      capitalizedTitle += `${title[0].toUpperCase()}${title
        .slice(1, title.length)
        .toLowerCase()}`;
    }
    capitalizedTitle += " ";
  });
  return capitalizedTitle.trim();
};

// One line solution

const capitalizeTitleOneLiner = title => title.split(' ').map(item => item.length <= 2 ? item.toLowerCase() : `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`).join(' ');

