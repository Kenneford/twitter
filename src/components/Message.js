import React from 'react'
import './Message.css'

export default function Message({message, user}) {
  if(!user){
    user={picture:"", username:""}
  }
  return (
    <div className='messages-cont'>
      <div className='msg-content'>
        <img src={user.picture} alt='' width='50px' />
        {/* <p>{message.author_id}</p> */}
        <p>{user.username}</p>
        <p>{message.date}</p>
      </div>
        <p className='tweet'>{message.text}</p>
        <div className='reactions'>
          <p><i className="fa-regular fa-comment-dots"></i></p>
          <p><i className="fa-regular fa-retweet"></i></p>
          <p>{message.likes}</p>
          <p><i className="fa-regular fa-share"></i></p>
        </div>
    </div>
  )
}
