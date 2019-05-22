import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'

class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatData: [],
    }
  }

  //get data from database
  componentDidMount() {
    fetch('http://localhost:3002/chatroom/message/user_id1', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        return this.setState({ chatData: data })
      })
  }

  render() {
    return (
      <>
        <div className="message">
          <div className="list-group">
            {this.state.chatData.map(data => {
              return (
                <NavLink
                  key={data.m_id}
                  to={'/chatroom/message/' + data.h_sub}
                  className="list-group-item "
                  activeClassName="active"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 ">{data.h_sub}</h5>
                    <span className="message-date">{data.m_time}</span>
                  </div>
                  <small>{data.m_cont}</small>
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
