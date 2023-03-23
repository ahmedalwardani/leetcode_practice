const destCity = (paths) => {
  const sourceCities = [];
  const destinationCities = [];
  for (const path of paths) {
    sourceCities.push(path[0]);
    destinationCities.push(path[1]);
  }
  for (const destinatioCity of destinationCities) {
    if (!sourceCities.includes(destinatioCity)) {
      return destinatioCity;
    }
  }
};
