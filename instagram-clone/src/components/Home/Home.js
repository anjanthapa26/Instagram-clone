import React from 'react'
import home from '../../Images/home.png'
import './Home.css'

const Home = () => {
  return (
    <div className='homeconts container'>
      <div className='inner home'>
        <img className='inner-logo' src={home} alt='home image' width={'24px'} height={'24px'}></img>
        <p> Home</p>
      </div>
    </div>
  )
}

export default Home
