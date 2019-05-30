import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { InputGroup, FormControl } from 'react-bootstrap'
import Message_new from '../components/Message_new'
import FriendList from '../components/FriendList'

function AsidePage(props) {
  return (
    <>
      <nav className="nav aside-page-box my-3 px-3 d-flex justify-content-center">
        <NavLink
          className=" chat-link pb-1 px-1 mr-4"
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
      <InputGroup className="mb-3 px-2">
        <FormControl
          className="rounded-pill"
          name="searchText"
          placeholder=""
        />
      </InputGroup>
      <Switch>
        <Route
          path={'/chatroom/message/' + 'ID' + props.logInId}
          render={() => (
            <Message_new logInId={props.logInId} refreshID={props.refresh} />
          )}
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
