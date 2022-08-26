import React, { useEffect, useState } from 'react';
import './App.module.scss';

import Main from "./containers/Main";
import NavBar from "./containers/NavBar";
// import getBeers from './services/beers.service';

const App = () => {

  const [ beers, setBeers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ abvFilterOn, setAbvFilterOn ] = useState(false);
  const [ classicFilterOn, setClassicFilterOn ] = useState(false);
  const [ acidicFilterOn, setAcidicFilterOn ] = useState(false);

  let API_URL = "https://api.punkapi.com/v2/beers";

  const getBeers = (searchTerm, abvFilterOn, classicFilterOn, acidicFilterOn) => {
    
    return fetch (API_URL)
        .then((res) => res.json())
        .then((jsonResponse) => {
            const searchedBeers = jsonResponse.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
            
            const filteredBeers = searchedBeers.map((beer) => {
              
              if (abvFilterOn && beer.abv < 6 ) {
                return beer;
              } else {
                return beer;
              }
            })
            setBeers(filteredBeers);
        })
}
  useEffect(() => {
    getBeers("")
  }, [])

  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
    getBeers(searchTerm)
  }

  return (
    <>
    <main>
      <NavBar updateSearchTerm={updateSearchTerm} setAbvFilterOn={setAbvFilterOn} 
      setClassicFilterOn={setClassicFilterOn} setAcidicFilterOn={setAcidicFilterOn} 
      abvFilterOn={abvFilterOn} classicFilterOn={classicFilterOn} acidicFilterOn={acidicFilterOn}
      />
      <Main beers={beers} />
    </main>
    </>

  );
}

export default App;
