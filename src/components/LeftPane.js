import React from 'react'
import logo from '../logo.svg'
import './LeftPane.css'

export default function LeftPane() {
  return (
    <div className='leftPane'>
        <div className='leftPane-cont'>
            <div>
            <i className="fa-brands fa-twitter"></i>
            </div>
            <div className='leftPane-icons'>
                <div><a href=''><i className="fa-solid fa-house"></i> Home</a></div>
                <div><a href=''><i className="fa-brands fa-wpexplorer special"></i> Explore</a></div>
                <div><a href=''><i className="fa-regular fa-bell special"></i> Notification</a></div>
                <div><a href=''><i className="fa-regular fa-envelope"></i> Message</a></div>
                <div><a href=''><i className="fa-regular fa-bookmark"></i> Bookmark</a></div>
                <div><a href=''><i className="fa-brands fa-elementor special"></i> Lists</a></div>
                <div><a href=''><i className="fa-regular fa-user special"></i> Profile</a></div>
                <div><a href=''><i className="fa-brands fa-gg-circle special"></i> More</a></div>
                <button>Tweet</button>
            </div>
            <div className='user'>
                <a href='#'>
                <img src={logo} alt='user-image' width='50px'/>
                <div className='user-name'>
                    <p>JustKenn</p>
                    <p className='nickName'>@Justkenn</p>
                </div>
                <div className='dots'>...</div>
                </a>
            </div>
        </div>
    </div>
  )
}
