import React from 'react'
import Card from './component/card.jsx'

// import myself from './component/myself.jsx'
// import nevbar from './component/nevbar.jsx'

// const xyz = "vinay joshi"



function App() {
  return (
    // <div>
    //   {nevbar()}
    //   {myself()} {/* calling component as function   .. it is am component based arch */}
    //   <div>
    //     <h1>hi i am {xyz} and i am a good coder </h1>
    //   </div>

    // </div>
    <div>
     <Card  user="Vinay Joshi " Age={20} img="https://media.istockphoto.com/id/1038727610/photo/liquid-shapes-abstract-holographic-3d-wavy-background.jpg?s=612x612&w=0&k=20&c=OSfb3DuCHkjERNJTpK4GzMN851GhHQA6Evn9DKc-kw4="/>
     <Card user="Rahul Sharma" Age={22} img="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s="/>
     <Card user="Priya Patel" Age={21} img="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-rostislav-5011647.jpg&fm=jpg" />
     
    </div>
  )
}

export default App
