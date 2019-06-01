import React from 'react'
import Selfie from '../avatar/girl.jpg'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

class OMPsidePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FriendData: [],
      FriendStatus: 'unFriend',
      friendNum: 0,
      toID: 0,
    }
  }
  //get data from database
  async componentDidMount() {
    let theUrl = this.props.location.pathname
    var toID = theUrl.split('/')[theUrl.split('/').length - 1].replace('ID', '')
    this.setState({ toID: toID })
    console.log(this.props.logInId)
    const response = await fetch(
      `http://localhost:3002/chatroom/friendList/${this.props.logInId}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
    const data = await response.json()

    //過濾掉delete的好友
    let noDeleteData = data.filter(ele => {
      return ele.status !== 'delete'
    })

    console.log('FriendData:', data)
    console.log('noDeleteFriendData:', noDeleteData)

    await this.setState({ FriendData: noDeleteData })

    let FriendNum = noDeleteData.filter(ele => {
      return ele.status == 'approve'
    })
    this.setState({ friendNum: FriendNum.length })
    let checkFriend = noDeleteData.filter((ele, ind) => {
      return ele.friendID == toID && (ele.status == 'approve' || 'review')
    })
    console.log(checkFriend)
    if (checkFriend[0]) {
      if (checkFriend[0].status == 'approve') {
        await this.setState({ FriendStatus: 'approve' })
      } else if (checkFriend[0].status == 'review') {
        await this.setState({ FriendStatus: 'review' })
      }
    }
    console.log(this.state.FriendStatus)
  }

  //addFriend
  addFriendClick = () => {
    var friendApplied = {
      applicant: parseInt(this.props.logInId),
      addFriendId: parseInt(this.state.toID),
    }
    console.log(friendApplied)
    fetch(`http://localhost:3002/chatroom/friendList/${this.state.toID}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(friendApplied),
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })

    this.setState({ FriendStatus: 'review' })

    console.log(this.state.FriendStatus)
  }
  cancelFriend = () => {
    var friendApplied = {
      applicant: parseInt(this.props.logInId),
      addFriendId: parseInt(this.state.toID),
    }
    console.log(friendApplied)
    fetch(`http://localhost:3002/chatroom/friendList/${this.state.toID}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(friendApplied),
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })

    this.setState({ FriendStatus: 'unFriend' })
  }

  render() {
    console.log('render', this.props.logInId)
    let theUrl = this.props.location.pathname
    var toID = theUrl.split('/')[theUrl.split('/').length - 1].replace('ID', '')
    return (
      <div className="OMPsidePage">
        <div className="imgOut">
          <img src={Selfie} alt="selfie" />
        </div>
        <div className="iconDetail row  align-items-center">
          <div className="col-md text-center">
            <div>
              <i className="fas fa-dice-five" />
            </div>
            <h5>10</h5>
            <p>參團</p>
          </div>
          <div className="col-md text-center">
            <div>
              <i className="fas fa-user-friends" />
            </div>
            <h5>{this.state.friendNum}</h5>
            <p>好友</p>
          </div>
        </div>
        <div
          className={
            this.props.logInId == toID
              ? 'd-none'
              : 'COM_btn row mx-0 mt-2 align-items-center'
          }
        >
          <div
            className={
              this.state.FriendStatus == 'unFriend'
                ? 'addFriend col-md text-center mx-2 button'
                : 'd-none'
            }
            onClick={this.addFriendClick}
          >
            <i className={'fas fa-plus'} />
            <span>{' 加入好友'}</span>
          </div>

          <div
            className={
              this.state.FriendStatus == 'review'
                ? 'addFriend col-md text-center mx-2 button'
                : 'd-none'
            }
            onClick={this.cancelFriend}
          >
            <span>{'取消好友申請'}</span>
          </div>

          <NavLink
            className={
              this.state.FriendStatus == 'approve'
                ? 'startChat col-md text-center mx-2 button'
                : 'd-none'
            }
            to={
              '/chatroom/message/' +
              'ID' +
              this.props.logInId +
              '/' +
              'ID' +
              toID
            }
          >
            <i className="far fa-comment-dots" />
            <span> 開始聊聊</span>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(OMPsidePage)
