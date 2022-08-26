import React from 'react'

import styles from "./Card.module.scss"


const Card = (props) => {
  const { image_url, name, description } = props.beer;

  return (
    <div className={styles.card} >
      <img className={styles.image} src={image_url} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card