import React from 'react'
import './RightPane.css'
import WhoToFollow from './WhoToFollow'

export default function RightPane({users}) {

  return (
    <div className='rightPane'>
        <div>
            <input type='text' 
            placeholder='Search Twitter' />
            <i className="fa-solid fa-magnifying-glass" id="search" title="Search"></i>
        </div>
        <div className='trends'>
                <h2>Trends for you</h2>
                <div className='politics'>
                    <p className='p-trend'>Politics . Trending</p>
                    <h3 className='p-h3'>#JustKennForPresident2022</h3>
                    <p className='p-tweets'>45.8K Tweets</p>
                </div>
                <div className='sports'>
                    <p className='s-trend'>Sports . Trending</p>
                    <h3 className='s-h3'>#JustinForPresident2022</h3>
                    <p className='s-tweets'>500.2K Tweets</p>
                </div>
                <div className='germany'>
                    <p className='g-trend'>Trending in Germany</p>
                    <h3 className='g-h3'>#JustKenn</h3>
                    <p className='g-tweets'>22.6K Tweets</p>
                </div>
                <button className='trends-btn'>Show more</button>
        </div>
        
        <div> <WhoToFollow users={users}/></div>
       
        
        <div className='footer'>
            <div className='policies'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
            </div>
        </div>
    </div>)}
