import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './StorySection.css'
import ImageItems from './ImageItems/ImageItems';
import {useFetch} from '../../../Hooks/useFetch'


const StorySection = () => {


    /*
    const [userRequest,setUserRequest] = useState({
        users: null,
        photos: null
    })
    const url1='https://jsonplaceholder.typicode.com/users'
    const url2='https://api.github.com/users/john-smilga/followers?per_page=100'


    useEffect(() => {
        axios.all([
            axios.get(url1),
            axios.get(url2)
        ])
        .then(axios.spread((...response) => {
            //console.log('users',response[0].data)
            //console.log('photos',response[1].data)
            setUserRequest(
                {
                    users:response[0].data,
                    photos:response[1].data
                })
        }))
    },[]);
    */
   //console.log(useFetch())
  const{userRequest} = useFetch()
  const{users,photos} = userRequest
  console.log(users,photos);
  return (
    <div className='Story-Section'>
        <div className='stories-container'>
            {users?.map((user,index) => {
                return <ImageItems key ={index} users={user.name} photos = {photos[index].avatar_url}/>
            })}
        </div>
    </div>
  )
}

export default StorySection