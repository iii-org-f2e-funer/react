import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import { InputGroup, FormControl } from 'react-bootstrap'
import Message from '../components/Message'
import FriendList from '../components/FriendList'

function AsidePage() {
  return (
    <>
      <nav className="nav aside-page-box my-3 ">
        <NavLink
          className=" chat-link pb-1 px-3"
          activeClassName="active"
          to="/chatroom/message"
          exact
        >
          聊天室
        </NavLink>
        <NavLink
          className=" chat-link pb-1 px-3"
          activeClassName="active"
          to="/chatroom/FriendList"
        >
          好友列表
        </NavLink>
      </nav>
      <InputGroup className="mb-3">
        <FormControl
          className="rounded-pill"
          name="searchText"
          placeholder=""
        />
      </InputGroup>
      <Switch>
        <Route path="/chatroom/Message" component={Message} />
        <Route path="/chatroom/FriendList" component={FriendList} />
      </Switch>
    </>
  )
}

export default AsidePage
