import React from 'react'

const Card = (props) => {
  const { elem } = props;
  return (
    <div>
      <a href={elem.url} target="_blank">
        <div className='h-48 w-56 overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url}></img>
      </div>
      <h2 className='font-bold text-lg mt-2'>{elem.author}</h2>
        </a>
    </div>
  )
}

export default Card
