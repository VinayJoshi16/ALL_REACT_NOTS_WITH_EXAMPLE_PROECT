import React, { useState } from 'react'
import Section1 from './component/section1/section1'
import Section2 from './component/section2/section2'
import Section3 from './component/section3/section3'

const App = () => {
  const [num, setNum] = useState(6)
  function increment() {
    setNum(num + 1)
  }
  function decrement() {
    setNum(num - 1)
  }
  function reset() {
    setNum(0)
  }
  function increaseByFive() {
    setNum(num + 5)
  }
  return (
    <div>
  <Section1  increment={increment} decrement={decrement} reset={reset} increaseByFive={increaseByFive} num={num} />
  <Section2 />
  <Section3 />
</div>

  )
}

export default App
