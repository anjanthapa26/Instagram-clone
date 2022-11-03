import React from 'react'
import notifications from '../../Images/love.png'

const Notification = () => {
  return (
    <div className='notificationconts container'>
      <div className='inner notification'>
        <img className='inner-logo' src={notifications} alt='home image' width={'24px'} height={'24px'}></img>
        <p> Notifications</p>
      </div>
    </div>
  )
}

export default Notification