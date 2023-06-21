import React from 'react'
import { ChatBubbleLeftRightIcon, PhoneIcon} from '@heroicons/react/24/solid'

const CustomerHeader = ({ chat }) => {
    // eslint-disable-next-line react/prop-types
   // console.log("chat.description", chat.description);
  return (
    <div className="chat-header">
        <div className = "flexbetween">
            <ChatBubbleLeftRightIcon className="icon-chat" />
            <h3 className='header-text'>{chat.title}</h3>
        </div>
        <div className = "flexbetween">
            <PhoneIcon className="icon-phone" />
            {chat.description !=="⬅️ ⬅️ ⬅️" ?
            (<p className="header-text">{chat.description}</p>):
            (<p className="header-text">no chat selected</p>)}
        </div>
    </div>
  )
}

export default CustomerHeader