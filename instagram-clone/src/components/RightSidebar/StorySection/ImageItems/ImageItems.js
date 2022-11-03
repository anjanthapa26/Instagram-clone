import React from 'react'
import './ImageItems.css'

const ImageItems = ({users,photos}) => {
    const trimUsers =users.trim().split(/\s+/)
    console.log(users)
  return (
    <div className='imageDiv'>
        <img className="stories-images" src={photos} alt='img' ></img>
        <p className='userNames'>{trimUsers[0]}</p>
    </div>
  )
}

export default ImageItems
