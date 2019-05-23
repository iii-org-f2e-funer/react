import React from 'react'
// //withRouter 匯入這個方法來讓子元件可以得到ROUTER的URL屬性
import { withRouter } from 'react-router'
import avatar from '../avatar/ironman.jpg'
// const PathNow = props => <div>目前位置 {props.location.pathname}</div>;

// export default withRouter(PathNow);

class ChatArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatDataAll: [],
      chatDataNoRp: [],
      url: '',
      senderText: [],
      receiverText: [],
    }
  }
  componentDidMount() {
    var newData = []

    fetch('http://localhost:3002/chatroom/message/user_id1', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        for (var i = 0; i < data.length; i++) {
          if (i + 1 < data.length) {
            if (
              data[i].receiver !== data[i + 1].receiver &&
              data[i].sender_id === 1
            ) {
              newData.push(data[i])
            }
          }
        }
        console.log(newData)

        this.setState({ chatDataAll: data, chatDataNoRp: newData })
      })
    let theUrl = this.props.location.pathname
    this.setState({ url: this.props.location.pathname })
    console.log(theUrl)
  }

  render() {
    return (
      <>
        {this.props.location.pathname}

        <div className="chat_box">
          <div className="message_list">
            <h5 className="text-center">您可以開始與user_id1聊天</h5>
            <h5 className="text-center">timeSpan</h5>
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
