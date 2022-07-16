import React from 'react'


export default function Message({message, user}) {
  return (
    <div>
        <p>{message.text}</p>
        <p>{message.author_id}</p>
        {/* <p>{user.username}</p> */}
        <p>Some username</p>
        <p>{message.date}</p>
        <p>{message.likes}</p>
    </div>
  )
}
