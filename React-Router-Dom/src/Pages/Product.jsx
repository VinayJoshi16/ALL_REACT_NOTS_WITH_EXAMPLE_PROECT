import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div >
        <div className='flex justify-center gap-3 py-5 font-bold text-2xl text-white'>
            <Link className='bg-black p-3 rounded-full' to="/man">Man</Link>
            <Link className='bg-black p-3 rounded-full' to="/woman">Woman</Link>
        </div>
      <h1 className=" text-black min-h-screen flex items-center justify-center font-bold text-9xl">PRODUCT Page...</h1>
    </div>
  )
}

export default Product
