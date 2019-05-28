import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { InputGroup, FormControl } from 'react-bootstrap'
import Message from '../components/Message'
import FriendList from '../components/FriendList'

function AsidePage(props) {
  return (
    <>
      <nav className="nav aside-page-box my-3 ">
        <NavLink
          className=" chat-link pb-1 px-3"
          activeClassName="active"
          to={'/chatroom/message/' + 'ID' + props.logInId}
        >
          聊天室
        </NavLink>
        <NavLink
          className=" chat-link pb-1 px-3"
          activeClassName="active"
          to={'/chatroom/FriendList/' + 'ID' + props.logInId}
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
        <Route
          path={'/chatroom/message/' + 'ID' + props.logInId}
          render={() => <Message logInId={props.logInId} />}
        />
        <Route
          path={'/chatroom/FriendList/' + 'ID' + props.logInId}
          render={() => <FriendList logInId={props.logInId} />}
        />
      </Switch>
    </>
  )
}

export default AsidePage
