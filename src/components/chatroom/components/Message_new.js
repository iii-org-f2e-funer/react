import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatDataAll: [],
      chatDataNoRp: [],
      doUpdate: '',
    }
  }

  //get data from database
  async componentDidMount() {
    const response = await fetch(
      `http://localhost:3002/chatroom/message/${this.props.logInId}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
    const data = await response.json()

    console.log(data)

    await this.setState({ chatDataAll: data })
  }

  // async componentWillReceiveProps() {
  //   const response = await fetch(
  //     `http://localhost:3002/chatroom/message/${this.props.logInId}`,
  //     {
  //       method: 'GET',
  //       headers: { 'Content-type': 'application/json' },
  //     }
  //   )
  //   const data = await response.json()

  //   console.log(data)

  //   await this.setState({ chatDataAll: data })
  // }

  render() {
    return (
      <>
        <div className="message">
          <div className="list-group">
            {this.state.chatDataAll.map(data => {
              return this.props.logInId == data.from_id ? (
                <NavLink
                  key={data.to_id}
                  to={
                    '/chatroom/message/' +
                    'ID' +
                    this.props.logInId +
                    '/' +
                    'ID' +
                    data.to_id
                  }
                  className="list-group-item "
                  activeClassName="active"
                >
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <h5 className="mb-1 text-nowrap  ">{data.y_toname}</h5>
                    <span className="message-date  text-wrap ">
                      {data.time}
                    </span>
                    {/* <span className="message-date  text-wrap ">
                      {data.m_time}
                    </span> */}
                  </div>
                  <small className="text-truncate">{data.subject}</small>
                </NavLink>
              ) : (
                <NavLink
                  key={data.from_id}
                  to={
                    '/chatroom/message/' +
                    'ID' +
                    this.props.logInId +
                    '/' +
                    'ID' +
                    data.from_id
                  }
                  className="list-group-item "
                  activeClassName="active"
                >
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <h5 className="mb-1 text-nowrap  ">{data.x_fromname}</h5>
                    <span className="message-date  text-wrap ">
                      {data.time}
                    </span>
                    {/* <span className="message-date  text-wrap ">
                      {data.m_time}
                    </span> */}
                  </div>
                  <small className="text-truncate">{data.subject}</small>
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
