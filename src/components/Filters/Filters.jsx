import React from 'react'
import styles from "./Filters.module.scss"

// to make these work we need a toggle function and state for checked/unchece=ked for each filter.
// use api amendments
// one filter at a time, make so only one can be checked

const Filters = (props) => {
  const { setAbvFilterOn, setClassicFilterOn, setAcidicFilterOn, abvFilterOn, classicFilterOn, acidicFilterOn } = props;

  
  return (
    // <div className={styles.filterContainer}>
    //   {createFilters}
    // </div>
    <>
      <div className={styles.filterItem} >
        <label for="abv">High ABV (> 6%)</label>
        <input type="checkbox" id="abv" onClick={() => {setAbvFilterOn(!abvFilterOn)}} />
      </div>
      <div className={styles.filterItem} >
        <label for="classic">Clasic range</label>
        <input type="checkbox" id="classic" onClick={() => {setClassicFilterOn(!classicFilterOn)}} />
      </div>
      <div className={styles.filterItem} >
        <label for="acidic">Acidic (ph below 4)</label>
        <input type="checkbox" id="acidic" onClick={() => {setAcidicFilterOn(!acidicFilterOn)}} />
      </div>
    </>
  )
}

export default Filters