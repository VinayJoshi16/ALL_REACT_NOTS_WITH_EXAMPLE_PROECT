import React from 'react'
import Counter from './Counter'

const section1 = ({ increment, decrement, reset, increaseByFive , num }) => {
  return (
    <div>
      <Counter increment={increment} decrement={decrement} reset={reset} increaseByFive={increaseByFive} num={num} />
    </div>
  )
}

export default section1
