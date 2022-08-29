import React from 'react'
import styles from "./Filters.module.scss"

const Filters = (props) => {
  const { updateAbvFilter, abvFilterOn, updateClassicFilter, classicFilterOn, updateAcidicFilter, acidicFilterOn } = props;

  
  return (
    <>
      <div className={styles.filterItem} >
        <label for="abv">High ABV </label>
        <input className={styles.radioBtn} type="radio" name="filters" id="abv" onClick={() => updateAbvFilter(!abvFilterOn)} />
      </div>
      <div className={styles.filterItem} >
        <label for="classic">Classic range </label>
        <input className={styles.radioBtn} type="radio" name="filters" id="classic" onClick={() => updateClassicFilter(!classicFilterOn)} />
      </div>
      <div className={styles.filterItem} >
        <label for="acidic">Acidic </label>
        <input className={styles.radioBtn} type="radio" name="filters" id="acidic" onClick={() => updateAcidicFilter(!acidicFilterOn)} />
      </div>
    </>
  )
}

export default Filters