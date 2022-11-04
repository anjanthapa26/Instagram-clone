import React, { useContext } from 'react'
import { UserContext } from '../../../../Hooks/UseContextApi'
import DisplayStories from '../DisplayStories/DisplayStories'
import './ImageItems.css'

const ImageItems = ({users,photos}) => {
    const {showdisplay,setShowDisplay} = useContext(UserContext)
    const trimUsers =users.trim().split(/\s+/)


    console.log('Inside ImageItems',showdisplay);
    const showStories = (e) => {
        
    }

    return (
        <div className='imageDiv' onClick={(e) => showStories(e)}>
            <img className="stories-images" src={photos} alt='img' ></img>
            <p className='userNames'>{trimUsers[0]}</p>
        </div>
    )
}

export default ImageItems
