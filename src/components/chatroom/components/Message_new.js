import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import avatar from '../avatar/ironman.jpg'
import moment from 'moment'
import 'moment/locale/zh-tw'

class Message_new extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatDataAll: [],
    }
  }

  //get data from database
  async componentDidMount() {
    const response = await fetch(
      `http://13.112.90.13:3002/chatroom/message/${this.props.logInId}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
    const data = await response.json()

    console.log(data)

    await this.setState({ chatDataAll: data })
  }

  async componentWillReceiveProps() {
    const response = await fetch(
      `http://13.112.90.13:3002/chatroom/message/${this.props.logInId}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
    const data = await response.json()

    console.log(data)
    data.filter(ele => {
      return (ele.time = moment(ele.time)
        .locale('zh-tw')
        .fromNow())
    })
    let new_data = data.filter(ele => {
      if (ele.from_id == this.props.logInId) {
        return (ele.imgURL = ele.photoTO_URL)
      } else if (ele.to_id == this.props.logInId) {
        return (ele.imgURL = ele.photoFROM_URL)
      }
    })
    console.log(new_data)
    await this.setState({ chatDataAll: new_data })
  }
  handleDelete = () => {
    let wantDelete = window.confirm('是否刪除對話紀錄')
    if (wantDelete) {
      console.log('DELETE')
    }
  }

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
                  <i
                    className="fas fa-times text-right"
                    onClick={this.handleDelete}
                  />
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="avatar mt-2">
                        <img
                          src={
                            'http://13.112.90.13:3002/public/images/member/' +
                            data.imgURL
                          }
                          alt="會員1頭像"
                        />
                      </div>
                      <h5 className="mb-1 text-nowrap  ">{data.y_toname}</h5>
                    </div>
                    <span className="message-date  text-wrap text-center ">
                      {data.time}
                    </span>
                    {/* <span className="message-date  text-wrap ">
                      {data.m_time}
                    </span> */}
                  </div>

                  <span>
                    <small className="text-truncate mt-2">{data.subject}</small>
                  </span>
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
                  <i class="fas fa-times" onClick={this.handleDelete} />
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="avatar mt-2">
                        <img
                          src={
                            'http://13.112.90.13:3002/public/images/member/' +
                            data.imgURL
                          }
                          alt="會員1頭像"
                        />
                      </div>
                      <h5 className="mb-1 text-nowrap  ">{data.x_fromname}</h5>
                    </div>
                    <span className="message-date  text-wrap text-center">
                      {data.time}
                    </span>
                    {/* <span className="message-date  text-wrap ">
                      {data.m_time}
                    </span> */}
                  </div>
                  <span>
                    <small className="text-truncate mt-2">{data.subject}</small>
                  </span>
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
          <div className="d-none">{this.props.refreshID}</div>
        </div>
      </>
    )
  }
}

export default Message_new
