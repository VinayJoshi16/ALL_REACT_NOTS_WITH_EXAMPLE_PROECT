import React from 'react'

const Counter = ({ increment, decrement, reset, increaseByFive,num}) => {
  return (
    <div>
      <div className='bg-[url("https://i.pinimg.com/1200x/e9/f2/0b/e9f20b03d17342a4fe377ca0de6772cc.jpg")] bg-cover bg-center h-screen w-full flex flex-col items-center'>
    
    <div className='h-130 w-200 mt-20 bg-[url("https://i.pinimg.com/736x/77/4b/35/774b3540d0afc0eadba26dc497a6894f.jpg")] bg-cover bg-center rounded-full flex items-center justify-center'>
      <h1 className='px-8 py-10 font-bold text-9xl flex text-amber-50'>{num}</h1>
    </div>

    <div className="flex gap-4 py-20 text-3xl">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-4xl" onClick={increment}>Increment</button>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-4xl" onClick={decrement}>Decrement</button>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-4xl" onClick={reset}>Reset</button>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-4xl" onClick={increaseByFive}>Increase by 5</button>
    </div>

  </div>
    </div>
  )
}

export default Counter
