import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'


const LeftContant = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/4'>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftContant
