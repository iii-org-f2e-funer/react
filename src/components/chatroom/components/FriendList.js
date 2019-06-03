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
    let noDeleteData = data[0].filter(ele => {
      return ele.status !== 'delete'
    })

    console.log('FriendData:', data)

    noDeleteData.sort(function(a, b) {
      if (a.status > b.status) {
        return 1
      }
      if (a.status < b.status) {
        return -1
      }
      return 0
    })

    console.log('noDeleteFriendData:', noDeleteData)

    // await this.setState({ FriendData: noDeleteData })
    let checkFriend = noDeleteData.filter((ele, ind, arr) => {
      return (
        (ele.status == 'review' && ele.user_id == this.props.logInId) ||
        ele.status == 'approve'
      )
      // return ele.friendID == toID && (ele.status == 'approve' || 'review')
    })
    await this.setState({ FriendData: checkFriend })
    console.log(checkFriend)
    // if (!Number(checkFriend)) {
    //   this.setState({ FriendStatus: 'unFriend' })
    // }
    // if (checkFriend[0]) {
    //   if (checkFriend[0].status == 'approve') {
    //     await this.setState({ FriendStatus: 'approve' })
    //   } else if (
    //     checkFriend[0].status == 'review' &&
    //     checkFriend[0].friend_id == this.props.logInId
    //   ) {
    //     await this.setState({ FriendStatus: 'waitMeReview' })
    //   } else if (checkFriend[0].status == 'review') {
    //     await this.setState({ FriendStatus: 'review' })
    //   }
    // }
    // console.log(this.state.FriendStatus)
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
                  key={
                    data.friend_id == this.props.logInId
                      ? data.user_id
                      : data.friend_id
                  }
                  to={
                    '/chatroom/FriendList/' +
                    'ID' +
                    this.props.logInId +
                    '/' +
                    'ID' +
                    (data.friend_id == this.props.logInId
                      ? data.user_id
                      : data.friend_id)
                  }
                  onClick={this.handleClick}
                  className={'list-group-item '}
                  activeClassName="active"
                >
                  <div className="d-flex w-100 justify-content-center align-items-center">
                    <div className="avatar">
                      <img src={avatar} alt="會員1頭像" />
                    </div>

                    <h5 className="mb-1 text-nowrap d-block">
                      {data.friend_id == this.props.logInId
                        ? data.user_name
                        : data.friend_name}
                    </h5>
                    <small
                      className={
                        data.status == 'review'
                          ? 'text-center pl-5 d-block'
                          : 'd-none'
                      }
                    >
                      待審核...
                    </small>
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
