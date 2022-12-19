import React from 'react'

const Test = () => {
  return Array(100).fill(null).map((_, index) => (
    <p key={index}>{"text " + index}</p>
  ))
}

export default Test