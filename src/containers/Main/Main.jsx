import React from 'react'

import CardList from "../../components/CardList"

const Main = (props) => {
  const { beers } = props;
  
  return (
      <CardList beers={beers} />
  )
}

export default Main