import React from 'react'
import LeftContant from './LeftContant'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-7 py-12 h-[90vh] flex items-center gap-10'>
      <LeftContant />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
