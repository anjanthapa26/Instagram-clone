import React, { useContext, useState } from 'react'
import { UserContext } from '../../../../Hooks/UseContextApi'

const DisplayStories = () => {
    const {showdisplay} = useContext(UserContext)
    console.log('Inside DisplayStories',showdisplay)
  return (
    <div className='stories-section' style={showdisplay ? 'block': 'none' }>

      
    </div>
  )
}

export default DisplayStories
