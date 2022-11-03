import React from 'react'
import create from '../../Images/add.png'

const Create = () => {
  return (
    <div className='createconts container'>
      <div className='inner create'>
        <img className='inner-logo' src={create} alt='home image' width={'24px'} height={'24px'}></img>
        <p> Create</p>
      </div>
    </div>
  )
}

export default Create