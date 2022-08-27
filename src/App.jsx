import React, { useEffect, useState } from 'react';
import './App.module.scss';

import Main from "./containers/Main";
import NavBar from "./containers/NavBar";
import { getBeers, getSearchedBeers, getAbvBeers, getClassicBeers, getAcidicBeers } from './services/beers.service';

const App = () => {

  const [ beers, setBeers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ abvFilterOn, setAbvFilterOn ] = useState(false);
  const [ classicFilterOn, setClassicFilterOn ] = useState(false);
  const [ acidicFilterOn, setAcidicFilterOn ] = useState(false);

//   const API_URL = "https://api.punkapi.com/v2/beers";

// const getBeers = () => {
//   return fetch (API_URL)
//       .then((res) => res.json())
//       .then((jsonResponse) => {
//           setBeers(jsonResponse);
//       })
// }
  useEffect( async () => {
    const beers = await getBeers("")
    setBeers(beers)
  }, [])

  // const getSearchedBeers = (searchTerm) => {
  //   return fetch (API_URL)
  //       .then((res) => res.json())
  //       .then((jsonResponse) => {
  //         const searchedBeers = jsonResponse.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
  //           setBeers(searchedBeers);
  //       })
  // }

  // const getAbvBeers = () => {
  //   return fetch (`${API_URL}/?abv_gt=6`)
  //       .then((res) => res.json())
  //       .then((jsonResponse) => {
  //           setBeers(jsonResponse);
  //       })
  // }

  // const getClassicBeers = () => {
  //   return fetch (`${API_URL}/?brewed_before=012010`)
  //       .then((res) => res.json())
  //       .then((jsonResponse) => {
  //           setBeers(jsonResponse);
  //       })
  // }

  // const getAcidicBeers = () => {
  //   return fetch (API_URL)
  //       .then((res) => res.json())
  //       .then((jsonResponse) => {
  //         const acidicBeers= jsonResponse.filter((beer) => beer.ph < 4)
  //           setBeers(acidicBeers);
  //       })
  // }

  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
    const beers = getSearchedBeers(searchTerm)
    setBeers(beers)
    ;
  }

  const updateAbvFilter = (abvFilterOn) => {
    setAbvFilterOn();
    const beers = getAbvBeers(abvFilterOn);
    setBeers(beers)
  }

  const updateClassicFilter = (classicFilterOn) => {
    setClassicFilterOn(classicFilterOn);
    const beers =  getClassicBeers();
    setBeers(beers)
  }

  const updateAcidicFilter = (acidicFilterOn) => {
    setAcidicFilterOn(acidicFilterOn);
    const beers = getAcidicBeers();
    setBeers(beers)
  }


  return (
    <>
    <main>
      <NavBar updateSearchTerm={updateSearchTerm} updateAbvFilter={updateAbvFilter} 
      abvFilterOn={abvFilterOn} updateClassicFilter={updateClassicFilter} classicFilterOn={classicFilterOn}
      updateAcidicFilter={updateAcidicFilter} acidicFilterOn={acidicFilterOn}
      />
      <Main beers={beers} />
    </main>
    </>

  );
}

export default App;
