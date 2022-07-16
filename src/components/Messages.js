import React from 'react';
import Message from './Message';
import useMessages from "../services/useMessages";
import { useState, useEffect } from 'react';

function Messages({ users, messages, index }) {

console.log({messages})

  return (
    <div>
      {messages.map(message =>  <Message
                key={index}
                message={message} 
                />)}
    </div>
  );
}


export default Messages;