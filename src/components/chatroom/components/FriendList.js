import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import avatar from '../avatar/ironman.jpg'

class FriendList extends React.Component {
  constructor() {
    super()
    this.state = {
      FriendData: [],
    }
  }

  //get data from database
  async componentDidMount() {
    const response = await fetch(
      `http://localhost:3002/chatroom/friendList/${this.props.logInId}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
    const data = await response.json()

    console.log('FriendData:', data)

    await this.setState({ FriendData: data })
  }
  render() {
    return (
      <>
        <div className="friendList">
          <div className="list-group">
            {this.state.FriendData.map(data => {
              return (
                <NavLink
                  key={data.friendID}
                  to={
                    '/chatroom/friendList/' +
                    'ID' +
                    this.props.logInId +
                    '/' +
                    'ID' +
                    data.friendID
                  }
                  className="list-group-item text-center"
                  activeClassName="active"
                >
                  <div className="d-flex w-100 justify-content-center align-items-center">
                    <div className="avatar">
                      <img src={avatar} alt="會員1頭像" />
                    </div>
                    <h5 className="mb-1 text-nowrap  ">{data.friendName}</h5>
                  </div>
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
