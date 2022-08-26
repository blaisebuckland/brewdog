import React from 'react'
import styles from "./Filters.module.scss"

const Filters = () => {
  const filterItems = [
    {
      id: "abv",
      label: "High ABV (> 6%)"
    },
    {
      id: "classic",
      label: "Classic range"
    },
    {
      id: "acidic",
      label: "Acidic (ph < 4)"
    },
    
  ]

  const createFilters = filterItems.map((filterItem) => {
    return (
    <> 
    <div className={styles.filterItem}>
    <label for={filterItem.id}>{filterItem.label}</label>
      <input type="checkbox" id={filterItem.id} />
    </div>
    </>
    )
  })
  
  return (
    <div className={styles.filterContainer}>
      {createFilters}
    </div>
  )
}

export default Filters