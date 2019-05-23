import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import { Next } from 'react-bootstrap/PageItem'
import Moment from 'react-moment'

class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatDataAll: [],
      chatDataNoRp: [],
    }
  }

  //get data from database
  componentDidMount() {
    var newData = []
    var receiverArray = []
    var receiverIndex = []
    fetch('http://localhost:3002/chatroom/message/user_id1', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
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

        this.setState({ chatDataAll: data, chatDataNoRp: newData })
      })
  }

  render() {
    return (
      <>
        <div className="message">
          <div className="list-group">
            {this.state.chatDataNoRp.map(data => {
              return (
                <NavLink
                  key={data.m_id}
                  to={'/chatroom/message/' + data.receiver}
                  className="list-group-item "
                  activeClassName="active"
                >
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <h5 className="mb-1 text-nowrap  ">{data.receiver}</h5>
                    <span className="message-date  text-wrap ">
                      <Moment format="YYYY-MM-DD HH:MM:SS">
                        {data.m_time}
                      </Moment>
                    </span>
                    {/* <span className="message-date  text-wrap ">
                      {data.m_time}
                    </span> */}
                  </div>
                  <small className="text-truncate">{data.m_cont}</small>
                </NavLink>
              )
            })}
            {/* <NavLink
              to="/chatroom/message/BOB"
              className="list-group-item "
              activeClassName="active"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 ">用戶名稱1</h5>
                <span className="message-date">5月20</span>
              </div>
              <small>Donec id elit non mi porta.</small>
            </NavLink>
             */}
          </div>
        </div>
      </>
    )
  }
}

export default Message
