import React from 'react'
import message from '../../Images/message.png'

const Message = () => {
  return (
    <div className='messageconts container'>
      <div className='inner message'>
        <img className='inner-logo' src={message} alt='home image' width={'24px'} height={'24px'}></img>
        <p> Message</p>
      </div>
    </div>
  )
}

export default Message