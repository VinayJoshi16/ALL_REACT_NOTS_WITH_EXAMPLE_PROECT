import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const Navigate = useNavigate()
  return (
    <div className='bg-cyan-400  justify-between items-center px-2 py-4'>
      <button onClick={()=>{
        Navigate('/')
      }}
      className='bg-black text-white p-5 mt-3 ml-2'>Return TO Home </button>
      <button onClick={() =>{
        Navigate(-1)
      }}
      className='bg-black text-white p-5 mt-3 ml-2'
      >
        back
      </button>
      <button onClick={() =>{
        Navigate(+1)
      }}
      className='bg-black text-white p-5 mt-3 ml-2'
      >
        
        Next
      </button>
    </div>
  )
}

export default Navbar2
