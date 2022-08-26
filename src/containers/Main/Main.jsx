import React from 'react'
import styles from "./Main.module.scss"

import beers from '../../data/beerData'

import Card from '../../components/Card'

const Main = () => {
  console.log(beers);
  return (
    <>
    <section className={styles.cardContainer} >
            {beers.map((beer) => {
                return <Card beer={beer} />
            })}
         </section>
    </>
  )
}

export default Main