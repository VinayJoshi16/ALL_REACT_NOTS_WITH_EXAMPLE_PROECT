import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {

    const param = useParams()
  return (
    <div>
      <h1 className=" text-black min-h-screen flex items-center justify-center font-bold text-9xl">{param.id}-Information...</h1>
    </div>
  )
}

export default AboutDetail
