import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id="right-content" className='h-full flex overflow-x-auto flex-nowrap gap-10 p-6 w-3/4  '>
      {props.users.map(function(elem, index) {
        return <RightCard key={index} id={index} image={elem.img} title={elem.title} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
