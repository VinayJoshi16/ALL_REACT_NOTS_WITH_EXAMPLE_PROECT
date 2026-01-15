import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Card from './component/Card';

const App = () => {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  async function getdata() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    setUserData(response.data);
  }

  useEffect(() => {
    getdata()
  }, [index]) 

  let PrintUserData = <h3 className='text-gray-300 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userdata.length > 0){
    PrintUserData = userdata.map(function(elem , idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }
  
  return (
    <div className='bg-black h-screen overflow-auto text-white p-4 '>
      <div className='flex flex-wrap gap-4 h-[85%]'>
        {PrintUserData}
      </div>
      <div className='flex justify-center py-4 gap-4'>
        <button 
        style={{opacity: index == 1 ? 0.5 : 1}}
        className='bg-amber-400 px-2 py-1 cursor-pointer active:scale-95 rounded-xl text-black font-bold'
         onClick={() => {
          if(index >1){
            setIndex(index - 1)
            setUserData([])
          }}
         }
        >
        prev
        </button>
        <h4>Page {index}</h4>
        <button 
        className='bg-amber-400 px-2 py-1 cursor-pointer active:scale-95 rounded-xl text-black font-bold'
        onClick={() => {
          setUserData([])
          setIndex(index + 1)
          }
         }
        
        >
        next
        </button>
      </div>
    </div>
  )
}

export default App
