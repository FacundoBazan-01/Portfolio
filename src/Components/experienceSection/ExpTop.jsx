import React from 'react'
import ExpTopLeft from './ExpTopLeft'
import ExpMiddle from './ExpMiddle'
import ExpTopRight from './ExpTopRight'

const ExpTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
      <ExpTopLeft/>
      <ExpMiddle/>
      <ExpTopRight/>
    </div>
  )
}

export default ExpTop
