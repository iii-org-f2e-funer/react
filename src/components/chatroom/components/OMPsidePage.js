import React from 'react'
import Selfie from '../avatar/girl.jpg'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import socketIOClient from 'socket.io-client'

class OMPsidePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FriendData: [],
      FriendAllData: [],
      FriendStatus: 'unFriend',
      friendNum: 0,
      toID: 0,
      endpoint: 'http://13.112.90.13:8080',
      photoURL: '',
    }
    this.ready()
  }
  //get data from database
  async componentDidMount() {
    let theUrl = this.props.location.pathname
    var toID = theUrl.split('/')[theUrl.split('/').length - 1].replace('ID', '')
    this.setState({ toID: toID })
    console.log(this.props.logInId)

    //get friend pics
    await fetch('http://13.112.90.13:3002/chatroom/openMemberPage/' + toID, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(res => {
        return res.json()
      })
      .then(obj => {
        console.log(obj)
        this.setState({
          photoURL: obj[1].photoURL,
          friendNum: obj[1].friendTotal,
          pt_num: obj[2].p_count,
        })
        console.log(this.state.photoURL)
      })

    const response = await fetch(
      `http://13.112.90.13:3002/chatroom/friendList/${this.props.logInId}`,
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
    console.log('noDeleteFriendData:', noDeleteData)

    // let FriendNum = noDeleteData.filter(ele => {
    //   return ele.status == 'approve'
    // })
    // this.setState({ friendNum: FriendNum.length })
    let checkFriend = noDeleteData.filter((ele, ind, arr) => {
      return ele.friend_id == toID || ele.user_id == toID
      // return ele.friendID == toID && (ele.status == 'approve' || 'review')
    })
    let newcheckFriend = checkFriend.filter(ele => {
      if (ele.user_id == this.props.logInId) {
        return (ele.imgURL = ele.photoTO_URL)
      } else if (ele.friend_id == this.props.logInId) {
        return (ele.imgURL = ele.photoFROM_URL)
      }
    })
    await this.setState({ FriendData: newcheckFriend[0] })
    console.log(newcheckFriend)
    if (!Number(newcheckFriend)) {
      this.setState({ FriendStatus: 'unFriend' })
    }
    if (newcheckFriend[0]) {
      if (newcheckFriend[0].status == 'approve') {
        await this.setState({ FriendStatus: 'approve' })
      } else if (
        newcheckFriend[0].status == 'review' &&
        newcheckFriend[0].friend_id == this.props.logInId
      ) {
        await this.setState({ FriendStatus: 'waitMeReview' })
      } else if (newcheckFriend[0].status == 'review') {
        await this.setState({ FriendStatus: 'review' })
      }
    }
    console.log(this.state.FriendStatus)
  }

  async componentWillReceiveProps() {
    let theUrl = this.props.location.pathname
    var toID = theUrl.split('/')[theUrl.split('/').length - 1].replace('ID', '')
    this.setState({ toID: toID })
    console.log(this.props.logInId)

    //get friend pics
    await fetch('http://13.112.90.13:3002/chatroom/openMemberPage/' + toID, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(res => {
        return res.json()
      })
      .then(obj => {
        console.log(obj)
        this.setState({
          photoURL: obj[1].photoURL,
          friendNum: obj[1].friendTotal,
          pt_num: obj[2].p_count,
        })
        console.log(this.state.photoURL)
      })

    const response = await fetch(
      `http://13.112.90.13:3002/chatroom/friendList/${this.props.logInId}`,
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
    console.log('noDeleteFriendData:', noDeleteData)

    // let FriendNum = noDeleteData.filter(ele => {
    //   return ele.status == 'approve'
    // })
    // this.setState({ friendNum: FriendNum.length })
    let checkFriend = noDeleteData.filter((ele, ind, arr) => {
      return ele.friend_id == toID || ele.user_id == toID
      // return ele.friendID == toID && (ele.status == 'approve' || 'review')
    })
    let newcheckFriend = checkFriend.filter(ele => {
      if (ele.user_id == this.props.logInId) {
        return (ele.imgURL = ele.photoTO_URL)
      } else if (ele.friend_id == this.props.logInId) {
        return (ele.imgURL = ele.photoFROM_URL)
      }
    })
    await this.setState({ FriendData: newcheckFriend[0] })
    console.log(newcheckFriend)
    if (!Number(newcheckFriend)) {
      this.setState({ FriendStatus: 'unFriend' })
    }
    if (newcheckFriend[0]) {
      if (newcheckFriend[0].status == 'approve') {
        await this.setState({ FriendStatus: 'approve' })
      } else if (
        newcheckFriend[0].status == 'review' &&
        newcheckFriend[0].friend_id == this.props.logInId
      ) {
        await this.setState({ FriendStatus: 'waitMeReview' })
      } else if (newcheckFriend[0].status == 'review') {
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
      action: 'add',
    }
    console.log(friendApplied)
    fetch(`http://13.112.90.13:3002/chatroom/friendList/${this.state.toID}`, {
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
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('confirm', { action: 'add' })
    this.setState({ FriendStatus: 'review' })

    console.log(this.state.FriendStatus)
  }
  cancelFriend = () => {
    var friendApplied = {
      applicant: parseInt(this.props.logInId),
      addFriendId: parseInt(this.state.toID),
      action: 'cancel',
    }
    console.log(friendApplied)
    fetch(`http://13.112.90.13:3002/chatroom/friendList/${this.state.toID}`, {
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
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('confirm', { action: 'cancel' })
    this.setState({ FriendStatus: 'unFriend' })
  }
  confirmFriend = () => {
    const socket = socketIOClient(this.state.endpoint)

    var friendApplied = {
      applicant: parseInt(this.props.logInId),
      addFriendId: parseInt(this.state.toID),
      action: 'confirm',
    }
    console.log(friendApplied)
    fetch(`http://13.112.90.13:3002/chatroom/friendList/${this.state.toID}`, {
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
    socket.emit('confirm', { action: 'confirm' })
    this.setState({ FriendStatus: 'approve' })
    this.props.handleaddFriend()
  }
  ready = () => {
    var theUrl = this.props.location.pathname
    var toID = theUrl.split('/')[theUrl.split('/').length - 1].replace('ID', '')
    const socket = socketIOClient(this.state.endpoint)
    socket.on('confirm', async obj => {
      console.log(obj)
      const response = await fetch(
        `http://13.112.90.13:3002/chatroom/friendList/${this.props.logInId}`,
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
      console.log('noDeleteFriendData:', noDeleteData)

      let FriendNum = noDeleteData.filter(ele => {
        return ele.status == 'approve'
      })
      this.setState({ friendNum: FriendNum.length })
      let checkFriend = noDeleteData.filter((ele, ind, arr) => {
        return ele.friend_id == toID || ele.user_id == toID
        // return ele.friendID == toID && (ele.status == 'approve' || 'review')
      })
      this.setState({ FriendData: checkFriend[0] })
      console.log(checkFriend)
      if (!Number(checkFriend)) {
        this.setState({ FriendStatus: 'unFriend' })
      }
      if (checkFriend[0]) {
        if (checkFriend[0].status == 'approve') {
          this.setState({ FriendStatus: 'approve' })
        } else if (
          checkFriend[0].status == 'review' &&
          checkFriend[0].friend_id == this.props.logInId
        ) {
          this.setState({ FriendStatus: 'waitMeReview' })
        } else if (checkFriend[0].status == 'review') {
          this.setState({ FriendStatus: 'review' })
        }
      }
      console.log(this.state.FriendStatus)
    })
  }

  render() {
    console.log('render', this.props.logInId)
    var theUrl = this.props.location.pathname
    var toID = theUrl.split('/')[theUrl.split('/').length - 1].replace('ID', '')

    return (
      <div className="OMPsidePage">
        <div className="imgOut">
          <img
            src={
              this.state.photoURL == false
                ? ''
                : '//13.112.90.13:3002/images/member/' + this.state.photoURL
            }
            alt="selfie"
          />
        </div>
        <div className="iconDetail row  align-items-center">
          <div className="col-md text-center">
            <div>
              <i className="fas fa-dice-five" />
            </div>
            <h5>{this.state.pt_num}</h5>
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
          {this.state.FriendStatus == 'review' ? (
            <div
              className={'addFriend col-md text-center mx-2 button'}
              onClick={this.cancelFriend}
            >
              <span>{'取消好友申請'}</span>
            </div>
          ) : (
            ''
          )}
          {this.state.FriendStatus == 'waitMeReview' ? (
            <div className="mx-auto">
              <small className="text-center  d-flex justify-content-center">
                {this.state.FriendData.user_id == toID
                  ? this.state.FriendData.user_name + '向您提出交友邀請'
                  : this.state.FriendData.friend_name + '向您提出交友邀請'}
              </small>
              <div className="d-flex justify-content-center align-items-center text-center ">
                <div
                  className={'addFriend col-md text-center mx-2 button'}
                  onClick={this.confirmFriend}
                >
                  <span>{'同意'}</span>
                </div>
                <div
                  className={'addFriend col-md text-center mx-2 button'}
                  onClick={this.cancelFriend}
                >
                  <span>{'拒絕'}</span>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

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
        <div className="d-none">
          {this.props.url}+{this.props.friendCheck}
        </div>
      </div>
    )
  }
}

export default withRouter(OMPsidePage)
