import React from 'react'
import Messages from '../components/Messages'


export default function AllMessages({message}) {
  return (
    <div>
        <p>{message.text}</p>
        <p>{message.author_id}</p>
        <p>{message.date}</p>
        <p>{message.likes}</p>
        <Messages />
    </div>
  )
}
