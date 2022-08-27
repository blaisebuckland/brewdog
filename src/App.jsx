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

  useEffect( async () => {
    const beers = await getBeers("")
    setBeers(beers)
  }, [])

  const updateSearchTerm = async (searchTerm) => {
    setSearchTerm(searchTerm);
    const beers = await getSearchedBeers(searchTerm)
    setBeers(beers)
    ;
  }

  const updateAbvFilter = async (abvFilterOn) => {
    setAbvFilterOn(abvFilterOn);
    const beers = await getAbvBeers();
    setBeers(beers)
  }

  const updateClassicFilter = async (classicFilterOn) => {
    setClassicFilterOn(classicFilterOn);
    const beers =  await getClassicBeers();
    setBeers(beers)
  }

  const updateAcidicFilter = async (acidicFilterOn) => {
    setAcidicFilterOn(acidicFilterOn);
    const beers = await getAcidicBeers();
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
