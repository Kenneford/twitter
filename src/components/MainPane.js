import React from 'react'
import Messages from './Messages'
import './MainPane.css'

export default function MainPane({users}) {
  return (
    <div className='mainPane'>

        <Messages users={users}/>
    </div>
  )
}
