import React from 'react'
import explore from '../../Images/explore.png'

const Explore = () => {
  return (
    <div className='exploreconts container'>
      <div className='inner explore'>
        <img className='inner-logo' src={explore} alt='home image' width={'24px'} height={'24px'}></img>
        <p> Explore</p>
      </div>
    </div>
  )
}

export default Explore