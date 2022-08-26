import React from 'react'
import styles from "./NavBar.module.scss"

import SearchBar from "../../components/SearchBar"
import Filters from "../../components/Filters"

const NavBar = () => {
  return (
    <>
    <section className={styles.navContainer}>
      <SearchBar />
      <Filters />
    </section>
    </>
  )
}

export default NavBar