import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

function Message() {
  return (
    <>
      <div className="message">
        <div className="list-group">
          <NavLink
            to="/chatroom/Message/user_id1"
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
            to="/chatroom/Message/user_id2"
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

export default Message
