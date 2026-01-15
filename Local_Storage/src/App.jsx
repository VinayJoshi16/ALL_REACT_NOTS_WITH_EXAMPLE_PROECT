import axios from 'axios';
import React from 'react'
import Effect from './component/Effect';

const App = () => {
  const user = {
        username:'vinay',
        age: 22, 
        city : 'pune'
      }
      console.log(user);
      // using fatch api
      const fatchdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data);
      }
      const getdata = async () => {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        // console.log(response.data);
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments') // destructuring
        console.log(data);
      }
  return (
    <div className='font-bold text-3xl  mt-10  ml-10'>
      it has only 4 methods
      <br /><br /> 
      1 . setItem(ex - localStorage.setItem('name', 'value'))-- adds key and value to local storage
      <br /><br />
      2 . getItem(ex - localStorage.getItem('name'))-- retrieves specific item from local storage
      <br /><br />
      3 . removeItem(ex - localStorage.removeItem('name')) -- removes specific item from local storage
      <br /><br />
      4 . clear(ex - localStorage.clear()) -- removes all the items from local storage

      <br /><br />
      Example :
      <br /><br />

      localStorage.setItem('user', JSON.stringify(user)) -- storing object in local storage
      <br /><br />
      Note : we are using
      <br /><br />
      JSON.stringify --- this is because local storage only stores strings

      const data = localStorage.getItem('user')
      <br /><br />
      const userData = JSON.parse(data) -- retrieving object from local storage

      <h1>API CALL in react</h1>
      there are 2 methods to call api in react
      <br /><br />
      1 . using fetch api
      <br /><br />
      2 . using axios library
      <br /><br />
      here we are using fetch api
      <br /><br />
      <button onClick={fatchdata} className='bg-blue-500 p-2 rounded-lg text-white'>Fetch Data</button>
      <br /><br />
      here we are using axios library
      <br /><br />
      <button onClick={getdata} className='bg-green-500 p-2 rounded-lg text-white'>Get Data</button>

       <br /><br /> <br /><br />

       <Effect />
    </div>
  )
}

export default App
