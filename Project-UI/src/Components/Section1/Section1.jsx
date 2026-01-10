import React from 'react'
import Nevbar from './Nevbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Nevbar />
      <Page1Content users={props.users} />
    </div>
  )
}

export default Section1
