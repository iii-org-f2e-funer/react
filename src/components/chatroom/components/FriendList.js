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

    //過濾掉delete的好友
    let noDeleteData = data[1].filter(ele => {
      return ele.status !== 'delete'
    })

    console.log('FriendData:', data)
    console.log('noDeleteFriendData:', noDeleteData)

    await this.setState({ FriendData: noDeleteData })
  }
  handleClick = () => {
    this.props.refresh()
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
                    '/chatroom/FriendList/' +
                    'ID' +
                    this.props.logInId +
                    '/' +
                    'ID' +
                    data.friendID
                  }
                  onClick={this.handleClick}
                  className={'list-group-item text-center'}
                  activeClassName="active"
                >
                  <div className="d-flex w-100 justify-content-center align-items-center">
                    <div className="avatar">
                      <img src={avatar} alt="會員1頭像" />
                    </div>
                    <h5 className="mb-1 text-nowrap  ">{data.friendName}</h5>
                  </div>
                  <small
                    className={
                      data.status == 'review' ? 'text-center pl-5' : 'd-none'
                    }
                  >
                    待審核...
                  </small>
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
