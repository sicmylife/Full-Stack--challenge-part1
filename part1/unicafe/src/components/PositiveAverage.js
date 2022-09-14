import React from 'react'

const PositiveAverage = ({positive,total}) => {
    let result = positive/total
    result = Math.trunc(result*100)
  return (
    <div>
        <p>{result}</p>
    </div>
  )
}

export default PositiveAverage