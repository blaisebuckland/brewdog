const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export const getSearchedBeers = (searchTerm) => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResponse) => {
      const searchedBeers = jsonResponse.filter((beer) =>
        beer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return searchedBeers;
    });
};

export const getAbvBeers = () => {
  return fetch(`${API_URL}/?abv_gt=6`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export const getClassicBeers = () => {
  return fetch(`${API_URL}/?brewed_before=012010`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export const getAcidicBeers = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResponse) => {
      const acidicBeers = jsonResponse.filter((beer) => beer.ph < 4);
      return acidicBeers;
    });
};
