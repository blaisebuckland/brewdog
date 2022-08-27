const API_URL = "https://api.punkapi.com/v2/beers";

const getBeers = () => {
    return fetch (API_URL)
        .then((res) => res.json())
        .then((jsonResponse) => {
            console.log(jsonResponse)
            // setBeers(jsonResponse);
        })
}

// add cleaning function

export default getBeers;