import React from 'react'
import styles from "./Filters.module.scss"

// to make these work we need a toggle function and state for checked/unchece=ked for each filter.
// use api amendments
// one filter at a time, make so only one can be checked

const Filters = (props) => {
  const { updateAbvFilter, abvFilterOn, updateClassicFilter, classicFilterOn, updateAcidicFilter, acidicFilterOn } = props;

  
  return (
    <>
      <div className={styles.filterItem} >
        <label for="abv">High ABV </label>
        <input type="radio" name="filters" id="abv" onClick={() => updateAbvFilter(!abvFilterOn)} />
      </div>
      <div className={styles.filterItem} >
        <label for="classic">Classic range </label>
        <input type="radio" name="filters" id="classic" onClick={() => updateClassicFilter(!classicFilterOn)} />
      </div>
      <div className={styles.filterItem} >
        <label for="acidic">Acidic </label>
        <input type="radio" name="filters" id="acidic" onClick={() => updateAcidicFilter(!acidicFilterOn)} />
      </div>
    </>
  )
}

export default Filters