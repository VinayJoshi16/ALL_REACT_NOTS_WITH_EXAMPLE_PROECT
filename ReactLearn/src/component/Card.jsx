import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
    <img src={props.img}></img>
      <h1 className='user'>{props.user},{props.Age}</h1>
        <p className='pera'>this is a simple sacr structure </p>
        <button className='button'>View card</button>
    </div>
  )
}

export default Card
