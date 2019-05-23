import React from 'react'
// //withRouter 匯入這個方法來讓子元件可以得到ROUTER的URL屬性
import { withRouter } from 'react-router'
import avatar from '../avatar/ironman.jpg'
// import Moment from 'react-moment'
// const PathNow = props => <div>目前位置 {props.location.pathname}</div>;

// export default withRouter(PathNow);

class ChatArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatDataAll: [],
      chatDataNoRp: [],
      member_name: '',
      member_chat_data: [],
      start_chat_time: '',
    }
  }
  async componentDidMount() {
    try {
      var newData = []
      var receiverArray = []
      var receiverIndex = []
      var memberChatData = []
      let theUrl = this.props.location.pathname
      theUrl = theUrl.split('/')[3]
      await this.setState({ member_name: theUrl })
      const response = await fetch(
        'http://localhost:3002/chatroom/message/user_id1',
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        }
      )
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      console.log(data)

      // 處理聊天室的對象主題時間（不包含自己）
      receiverArray = data.filter(element => {
        return element.sender_id === 1
      })
      receiverArray = receiverArray.map(ele => {
        return ele.receiver
      })
      receiverIndex = receiverArray.map((element, index, arr) => {
        return arr.indexOf(element)
      })
      receiverIndex = receiverIndex.filter((element, index, arr) => {
        return index === arr.indexOf(element)
      })

      newData = receiverIndex.map(element => {
        return data[element]
      })

      console.log(receiverArray)
      console.log(receiverIndex)
      console.log(newData)

      memberChatData = data.filter(ele => {
        return ele.receiver === theUrl || ele.sender === theUrl
      })

      await this.setState({
        chatDataAll: data,
        chatDataNoRp: newData,
        member_chat_data: memberChatData,
        start_chat_time: memberChatData[0].h_stime,
      })

      console.log(this.state.chatDataAll)

      console.log(theUrl)

      console.log(memberChatData)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <>
        {this.props.location.pathname}

        <div className="chat_box">
          <div className="message_list">
            <h5 className="text-center">
              {'您可以開始與' + this.state.member_name + '聊天'}
            </h5>
            <h5 className="text-center">{this.state.start_chat_time}</h5>
            {/* 資料庫撈資料進來的地方 */}
            {/* 如果是自己傳給對方在右邊(有sender class) */}
            <ul className="d-flex flex-column ">
              <li className={'sender'}>
                <div className="text-box sender align-items-center">
                  <h5 className="my-auto rounded-pill">
                    這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話
                  </h5>
                </div>
                <small>timespan</small>
              </li>

              {/* 如果是對方傳來在左邊 */}
              <li>
                <div className="text-box  align-items-center">
                  <div className="avatar ">
                    <img src={avatar} alt="會員1頭像" />
                  </div>
                  <h5 className="my-auto rounded-pill">
                    這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話
                  </h5>
                </div>
                <small>timespan</small>
              </li>
            </ul>
          </div>
          <div className="send_box d-flex ">
            <input className="blue" type="text" />
            <button className="button button--yellow">傳送</button>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(ChatArea)
