import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Effect = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  

  function aChanging() {
    console.log('A ki value change ho gyi');
  }

  function bChanging() {
    console.log('B ki value change ho gyi');
  }

  useEffect(function(){
    aChanging()
  },[a])
  
  useEffect(function(){
    bChanging()
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button className='bg-green-500 p-4 mt-2.5'
        onClick={() => {
          setA(a + 1)
        }}
      >Change A</button>
      <button className='bg-blue-500 p-4 ml-4 mt-2.5'
        onClick={() => {
          setB(b - 1)
        }}
      >Change B</button>
    </div>
  )
}

export default Effect