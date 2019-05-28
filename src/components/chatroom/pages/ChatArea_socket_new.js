import React from 'react'
// //withRouter 匯入這個方法來讓子元件可以得到ROUTER的URL屬性
import { withRouter } from 'react-router'
import avatar from '../avatar/ironman.jpg'
import socketIOClient from 'socket.io-client'
import MessageList from '../components/MessageList'

// const PathNow = props => <div>目前位置 {props.location.pathname}</div>;

// export default withRouter(PathNow);

class ChatArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatDataAll: [],
      to_member_name: '',
      to_u_id: '',
      from_member_name: '',
      from_u_id: '',
      member_chat_data: [],
      start_chat_time: '',
      endpoint: 'http://localhost:8080',
      newChatData: [],
      inputContent: '',
      messages: [],
      roomID: '',
    }
    this.ready()
  }

  async componentDidMount() {
    try {
      var memberChatData = []
      let theUrl = this.props.location.pathname
      let to_id = theUrl.split('/')[4].replace('ID', '')
      let from_id = theUrl.split('/')[3].replace('ID', '')
      console.log(theUrl)
      await this.setState({
        to_member_name: to_id,
        to_u_id: to_id,
        from_member_name: from_id,
        from_u_id: from_id,
      })

      //fecth data from database(chat history)
      const response = await fetch(
        `http://localhost:3002/chatroom/message/${this.props.logInId}/${to_id}`,
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        }
      )
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      console.log(data)

      memberChatData = data.filter(ele => {
        return ele.m_receiver_id == to_id || ele.m_sender_id == to_id
      })
      memberChatData = memberChatData.sort(function(a, b) {
        return a.m_time > b.m_time ? 1 : -1
      })

      await this.setState({
        chatDataAll: data,
        member_chat_data: memberChatData,
        start_chat_time: memberChatData[0].h_stime,
      })

      console.log(this.state.chatDataAll)
      console.log(this.state.member_chat_data)
    } catch (e) {
      console.log(e)
    }
  }
  //////
  async updateMsg(obj) {
    let messages = this.state.messages
    const newMsg = {
      type: 'chat',
      username: obj.username,
      uid: obj.uid,
      action: obj.message,
      time: obj.time,
      msgId: this.generateMsgId(),
    }
    let messages_new = [...messages, newMsg]
    await this.setState({ messages: messages_new })
    console.log(this.state.messages)
  }
  generateMsgId() {
    return new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
  }
  generateTime = () => {
    let tzoffset = new Date().getTimezoneOffset() * 60000 //offset in milliseconds
    let localISOTime = new Date(Date.now() - tzoffset) //get local time
      .toISOString()
      .replace(/\.\d{3}\Z/, ' ')
      .replace('T', ' ')
    return localISOTime
  }
  ready() {
    const socket = socketIOClient(this.state.endpoint)
    socket.on('message', obj => {
      this.updateMsg(obj)
      console.log(obj)
    })
    let theUrl = this.props.location.pathname
    var fromID = theUrl.split('/')[3].replace('ID', '')
    var toID = theUrl.split('/')[4].replace('ID', '')
    var roomID = this.props.userData.filter((ele, index, arr) => {
      if (
        (ele.from_id == fromID || ele.from_id == toID) &&
        (ele.to_id == fromID || ele.to_id == toID)
      ) {
        return arr[index]
      }
    })
    roomID = roomID[0].id
    socket.emit('join', roomID)
    socket.on('join', data => {
      console.log('join room ' + data)
    })
  }

  getRoomID = () => {
    let theUrl = this.props.location.pathname
    let fromID = theUrl.split('/')[3].replace('ID', '')
    let toID = theUrl.split('/')[4].replace('ID', '')
    var roomID = this.props.userData.filter((ele, index, arr) => {
      if (
        (ele.from_id == fromID || ele.from_id == toID) &&
        (ele.to_id == fromID || ele.to_id == toID)
      ) {
        return arr[index]
      }
    })
    this.setState({ roomID: roomID[0].id })
  }

  // uid: this.state.u_id,
  // username: this.state.member_name,
  // message: inputContent,
  //////
  handleChange = event => {
    console.log(event.target.value)
    this.setState({ inputContent: event.target.value })
  }
  handleClick = () => {
    this.sendMessage()
    // console.log(this.state.member_chat_data[0].m_time)
    // console.log(this.state.member_chat_data[0].sender_id)
    // console.log(this.props.logInId)
    // //emit to socket.oi
    // let room =
    //   this.state.member_chat_data[0].sender_id +
    //   '_' +
    //   this.state.member_chat_data[0].receiver_id
    // socket.emit('new_text', this.state.inputContent, room)
    // socket.on('new_text', newText => {
    //   console.log(newText)
    //   let m_issender =
    //     this.state.member_chat_data[0].sender_id == this.props.logInId ? 1 : 0
    //   let chatData = {
    //     m_cont: newText,
    //     m_issender: m_issender,
    //     h_id: this.state.member_chat_data[0].h_id,
    //     is_readed: 0,
    //   }
    //   let copyNewChatData = [...this.state.newChatData, chatData]
    //   let copyMemberChatData = [...this.state.member_chat_data, chatData]
    //   this.setState({
    //     newChatData: copyNewChatData,
    //     inputContent: '',
    //     member_chat_data: copyMemberChatData,
    //   })
    //   console.log(this.state.member_chat_data)
    //   console.log(this.newChatData)
    //Post data to database
    // const post_data = fetch(
    //   `http://localhost:3002/chatroom/message/${this.props.logInId}/${
    //     this.state.member_name
    //   }`,
    //   {
    //     method: 'POST',
    //     headers: { 'Content-type': 'application/json' },
    //     body: JSON.stringify(chatData),
    //     // body: JSON.stringify(copyNewChatData),
    //   }
    // )
    // })
  }
  sendMessage = async () => {
    const inputContent = this.state.inputContent
    const socket = socketIOClient(this.state.endpoint)

    await this.getRoomID()
    if (inputContent) {
      const obj = {
        uid: this.state.from_u_id,
        to_uid: this.state.to_u_id,
        username: this.state.from_member_name,
        message: inputContent,
        time: this.generateTime(),
        roomID: this.state.roomID,
        h_id: this.state.member_chat_data[0].h_id,
        is_readed: 0,
      }
      ////////////POST to DATA BASE/////////
      const post_data = fetch(
        `http://localhost:3002/chatroom/message/${this.props.logInId}/${
          this.state.to_member_name
        }`,
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(obj),
          // body: JSON.stringify(copyNewChatData),
        }
      )
      socket.emit('message', obj)
      // 发送消息后清空输入框
      this.setState({ inputContent: '' })
    }
  }

  render() {
    return (
      <>
        {this.props.location.pathname}

        <div className="chat_box">
          <div className="message_list">
            {/* 資料庫撈資料進來的地方 */}
            {/* 如果是自己傳給對方在右邊(有sender class) */}
            <ul className="d-flex flex-column  ">
              <h5 className="text-center">
                {'您可以開始與' + this.state.to_member_name + '聊天'}
              </h5>
              <h5 className="text-center">{this.state.start_chat_time}</h5>
              {this.state.member_chat_data.map(element => {
                return element.m_sender_id == this.state.from_u_id ? (
                  <li className={'sender'} key={+new Date() + Math.random()}>
                    <div className="text-box sender align-items-center">
                      <h5 className="my-auto rounded-pill">{element.m_cont}</h5>
                    </div>
                    <small>{element.m_time}</small>
                  </li>
                ) : (
                  <li key={+new Date() + Math.random()}>
                    <div className="text-box  align-items-center">
                      <div className="avatar ">
                        <img src={avatar} alt="會員1頭像" />
                      </div>
                      <h5 className="my-auto rounded-pill">{element.m_cont}</h5>
                    </div>
                    <small>{element.m_time}</small>
                  </li>
                )
              })}
              <MessageList
                u_id={this.state.from_u_id}
                message={this.state.messages}
              />
              {/* <li className={'sender'}>
                <div className="text-box sender align-items-center">
                  <h5 className="my-auto rounded-pill">
                    {this.state.member_chat_data.m_cont}
                  </h5>
                </div>
                <small>timespan</small>
              </li> */}
              {/* 如果是對方傳來在左邊 */}
              {/* <li>
                <div className="text-box  align-items-center">
                  <div className="avatar ">
                    <img src={avatar} alt="會員1頭像" />
                  </div>
                  <h5 className="my-auto rounded-pill">
                    這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話
                  </h5>
                </div>
                <small>timespan</small>
              </li> */}
            </ul>
          </div>
          <div className="send_box d-flex ">
            <input
              className="blue"
              type="text"
              value={this.state.inputContent}
              onChange={this.handleChange}
            />
            <button
              className="button button--yellow"
              onClick={this.handleClick}
            >
              傳送
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(ChatArea)
