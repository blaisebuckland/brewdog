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

//   const getBeers = (searchTerm, abvFilterOn, classicFilterOn, acidicFilterOn) => {
    
//     return fetch (API_URL)
//         .then((res) => res.json())
//         .then((jsonResponse) => {
//             const searchedBeers = jsonResponse.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
            
//             const filteredBeers = searchedBeers.map((beer) => {
              
//               if (abvFilterOn && beer.abv < 6 ) {
//                 return beer;
//               } else {
//                 return beer;
//               }
//             })
//             setBeers(filteredBeers);
//         })
// }
const getBeers = () => {
  return fetch (API_URL)
      .then((res) => res.json())
      .then((jsonResponse) => {
          setBeers(jsonResponse);
      })
}
  useEffect(() => {
    getBeers("")
  }, [])

  const getSearchedBeers = (searchTerm) => {
    return fetch (API_URL)
        .then((res) => res.json())
        .then((jsonResponse) => {
          const searchedBeers = jsonResponse.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setBeers(searchedBeers);
        })
  }

  const getAbvBeers = () => {
    return fetch (`${API_URL}/?abv_gt=6`)
        .then((res) => res.json())
        .then((jsonResponse) => {
            setBeers(jsonResponse);
        })
  }

  const getClassicBeers = () => {
    return fetch (`${API_URL}/?brewed_before=012010`)
        .then((res) => res.json())
        .then((jsonResponse) => {
            setBeers(jsonResponse);
        })
  }

  const getAcidicBeers = () => {
    return fetch (API_URL)
        .then((res) => res.json())
        .then((jsonResponse) => {
          const acidicBeers= jsonResponse.filter((beer) => beer.ph < 4)
            setBeers(acidicBeers);
        })
  }

  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
    getSearchedBeers(searchTerm);
  }

  const updateAbvFilter = (abvFilterOn) => {
    setAbvFilterOn();
    getAbvBeers(abvFilterOn);
  }

  const updateClassicFilter = (classicFilterOn) => {
    setClassicFilterOn(classicFilterOn);
    getClassicBeers();
  }

  const updateAcidicFilter = (acidicFilterOn) => {
    setAcidicFilterOn(acidicFilterOn);
    getAcidicBeers();
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
