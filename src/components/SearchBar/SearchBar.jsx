import React from 'react'
import styles from "./SearchBar.module.scss"

const SearchBar = (props) => {
  const { updateSearchTerm } = props;
  const placeholderText = "Search..."
  return (
    <input type="text" placeholder={placeholderText} onChange={event => updateSearchTerm(event.target.value)}/>
  )
}

export default SearchBar