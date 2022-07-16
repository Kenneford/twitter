import React from 'react'
import Messages from './Messages'
import './MainPane.css'

export default function MainPane({users, messages}) {

  if (!messages || !users ) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='mainPane'>
        <Messages users={users} messages={messages}/>
    </div>
  )
}
