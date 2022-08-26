import React from 'react'
import styles from "./SearchBar.module.scss"

const SearchBar = () => {
  const placeholderText = "Search..."
  return (
    <input type="text" placeholder={placeholderText}/>
  )
}

export default SearchBar