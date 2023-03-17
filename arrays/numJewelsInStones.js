const numJewelsInStones = (jewels, stones) => {
  let numberOfJewels = 0;
  for (const stone of stones) {
    if (jewels.includes(stone)) {
      numberOfJewels += 1;
    }
  }
  return numberOfJewels;
};
