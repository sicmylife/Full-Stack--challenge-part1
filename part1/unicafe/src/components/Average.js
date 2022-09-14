import React from 'react'

const Average = ({positive,total,negative}) => {
    let sumAll = positive - negative
    let average = sumAll/total
  return (

    <p>{average}</p>
    
  )
}

export default Average