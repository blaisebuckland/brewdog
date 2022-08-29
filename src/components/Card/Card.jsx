import React from 'react'

import styles from "./Card.module.scss"


const Card = (props) => {
  const { image_url, name, tagline, first_brewed, abv } = props.beer;

  return (
    <div className={styles.card} >
      <img className={styles.image} src={image_url} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <p>"{tagline}"</p>
      <br />
      <ul>
        <li>ABV: {abv}</li>
        <li>First brewed: {first_brewed}</li>
      </ul>
      <br />
    </div>
  )
}

export default Card