import axios from 'axios';
import { useEffect,useState } from 'react';


export const useFetch = () => {

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
            
            setUserRequest({
                users:response[0].data,
                photos: response[1].data
            })
        }))
    },[])

    return {userRequest}

}