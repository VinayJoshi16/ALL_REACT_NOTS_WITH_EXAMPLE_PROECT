import React from 'react'
import Rightcadecontant from './Rightcadecontant'

const RightCard = (props) => {
  console.log(props.image);
  return (
    <div className='h-full overflow-hidden relative shrink-0 w-89 rounded-4xl'>
      <img className="object-cover h-full w-full" src={props.image} alt="Background" ></img>
      <Rightcadecontant tag={props.tag} id={props.id} title={props.title} />
    </div>
  )
}

export default RightCard
