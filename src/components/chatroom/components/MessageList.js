import React from 'react'
import avatar from '../avatar/ironman.jpg'

class MessageList extends React.Component {
  render() {
    const myId = this.props.u_id
    const oneMessage = this.props.message.map(ele => {
      return (
        <Message
          key={ele.msgId}
          msgType={ele.type}
          msgUser={ele.username}
          action={ele.action}
          isMe={myId == ele.uid ? true : false}
          time={ele.time}
          photoURL={ele.urlSender}
        />
      )
    })
    return <>{oneMessage}</>
  }
}

class Message extends React.Component {
  render() {
    // 聊天消息，判断是否是自己
    console.log(this.props.photoURL)
    return (
      <li className={this.props.isMe ? 'sender' : ''}>
        <div className="text-box sender align-items-center">
          <div className={this.props.isMe ? 'd-none' : 'avatar'}>
            <img
              src={'//13.112.90.13:3002/images/member/' + this.props.photoURL}
              alt="會員1頭像"
            />
          </div>
          <h5 className="my-auto rounded-pill">{this.props.action}</h5>
        </div>
        <small>{this.props.time}</small>
      </li>
    )
  }
}
export default MessageList
