import React from 'react'
import styles from "./NavBar.module.scss"

import SearchBar from "../../components/SearchBar"
import Filters from "../../components/Filters"

const NavBar = (props) => {
  const { updateSearchTerm, setAbvFilterOn, setClassicFilterOn, setAcidicFilterOn, abvFilterOn, classicFilterOn, acidicFilterOn } = props;
  return (
    <>
    <section className={styles.navContainer}>
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <Filters setAbvFilterOn={setAbvFilterOn} 
      setClassicFilterOn={setClassicFilterOn} setAcidicFilterOn={setAcidicFilterOn} 
      abvFilterOn={abvFilterOn} classicFilterOn={classicFilterOn} acidicFilterOn={acidicFilterOn}/>
    </section>
    </>
  )
}

export default NavBar