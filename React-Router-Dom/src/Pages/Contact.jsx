import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div >
      <div className='flex justify-center gap-3 py-5 font-bold text-2xl text-white'>
        <Link className='bg-black p-3 rounded-full' to='/contact/LocalContact'>Local</Link>
        <Link className='bg-black p-3 rounded-full' to='/contact/GlobalContact'>Global</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Contact
