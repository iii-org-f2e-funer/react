import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      chat_data: [],
    }
  }

  //get data from database
  async componentDidMount() {
    // try {
    //   const response = await fetch('http://localhost:5555/students', {
    //     method: 'GET',
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   })
    //   if (!response.ok) throw new Error(response.statusText)
    //   const jsonObject = await response.json()
    //   console.log(jsonObject)
    //   await this.setState({ studentData: jsonObject })
    // } catch (e) {
    //   console.log(e)
    // } finally {
    // }
  }

  render() {
    return (
      <>
        <div className="message">
          <div className="list-group">
            <NavLink
              to="/chatroom/message/user_id1"
              className="list-group-item "
              activeClassName="active"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 ">用戶名稱1</h5>
                <span className="message-date">5月20</span>
              </div>
              <small>Donec id elit non mi porta.</small>
            </NavLink>
            <NavLink
              to="/chatroom/message/user_id2"
              className="list-group-item"
              activeClassName="active"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 ">用戶名稱2</h5>
                <span className="message-date">4月28</span>
              </div>
              <small className="">Donec id elit non mi porta.</small>
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}

export default Message
