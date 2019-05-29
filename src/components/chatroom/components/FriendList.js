import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'

class FriendList extends React.Component {
  constructor() {
    super()
    this.state = {}
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
  render() {
    return (
      <>
        <div className="friendList">
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
                  </div>
                  <small className="text-truncate">{data.subject}</small>
                </NavLink>
              )
            })}
          </div>
          <div className="d-none" />
        </div>
      </>
    )
  }
}

export default FriendList
