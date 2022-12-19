import React from 'react'
import Meta from 'src/config/Meta'

const Test = () => {
  return (
    <>
      <Meta />

      {Array(2).fill(null).map((_, index) => (
        <p key={index}>{"text " + index}</p>
      ))}
    </>
  )
}

export default Test