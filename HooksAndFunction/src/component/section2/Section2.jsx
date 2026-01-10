import React, { useState } from 'react'

const section2 = () => {
    const [num, setNum] = useState(20);
    const Num = () =>{
    //     const newNum = {...num}
    //     newNum.user="Joshi"
    //     newNum.age=21
    //     setNum(newNum)
           setNum(prev=>(prev+1))
           setNum(prev=>(prev+1))
           setNum(prev=>(prev+1))
    }
    // const [num, setnum] = useState([10,20,30]);
    // const Num =() =>{
    //     const newNum = [...num]
    //     newNum.push(40)
    //     setnum(newNum)
    // }
  return (
    <div className=' py-2 h-screen w-full flex flex-col '>
      <h1 className='font-bold text-4xl'>{num}</h1>
      <button  className="px-10 py-10 bg-blue-900 w-30" onClick={Num}>click</button>
    </div>
  )
}

export default section2
