import React from 'react'
import styles from "./NavBar.module.scss"

import SearchBar from "../../components/SearchBar"
import Filters from "../../components/Filters"

const NavBar = (props) => {
  const { updateSearchTerm, updateAbvFilter, abvFilterOn, updateClassicFilter, classicFilterOn, updateAcidicFilter, acidicFilterOn } = props;
  
  const resetFilters = () => window.location.reload();

  return (
    <>
    <section className={styles.navContainer}>
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <Filters updateAbvFilter={updateAbvFilter} abvFilterOn={abvFilterOn} updateClassicFilter={updateClassicFilter} 
      classicFilterOn={classicFilterOn} updateAcidicFilter={updateAcidicFilter} acidicFilterOn={acidicFilterOn}/>
      <button className={styles.resetBtn} onClick={() => {resetFilters()}} >Reset filters</button>
    </section>
    </>
  )
}

export default NavBar