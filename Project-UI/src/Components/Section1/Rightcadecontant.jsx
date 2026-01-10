import React from 'react'

const Rightcadecontant = (props) => {
  console.log(props.title);
  return (
     <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center '>{props.id+1}</h2>
        <div>
            <p className='text-white leading-normal flex-col flex font-bold text-2xl '>{props.title}</p>
        </div>
        <div className='justify-between flex'>
            <button className= 'font-medium bg-blue-700 px-6 py-3 rounded-full text-lg '>{props.tag}</button>
            <button className= 'font-medium bg-blue-700 px-5 py-3 rounded-full text-lg '>^</button>
        </div>
      </div>
  )
}

export default Rightcadecontant
