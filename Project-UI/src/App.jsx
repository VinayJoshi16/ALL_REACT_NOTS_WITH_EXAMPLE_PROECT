import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
  {
    img: "https://i.pinimg.com/736x/56/94/e1/5694e173bb4a740507c234167c609479.jpg",
    title: "Prime customers that have access to bank credit and are not satisfied with the current",
    tag: "Not Satisfied"
  },
  {
    img: "https://i.pinimg.com/1200x/8d/b6/fe/8db6fe0b07a79dbaf18feff57d077001.jpg",
    title: "Customers that do not have access to bank credit but are satisfied with the current",
    tag: "Satisfied"
  },
  {
    img: "https://i.pinimg.com/736x/90/1e/9c/901e9c722dfc110924863b61ae7d64a2.jpg",
    title: "Potential customers that do not have access to bank credit and are not satisfied with the current",
    tag: "Bad"
  },
  {
    img: "https://i.pinimg.com/1200x/df/81/8e/df818e5398e79da4905f6308b780dad8.jpg",
    title: "Potential customers that do not have access to bank credit and are not satisfied with the current",
    tag: "Good"
  }
];
  return (
    <div>
     <Section1 users={users} /> 
     <Section2 />
    </div>
  )
}

export default App
