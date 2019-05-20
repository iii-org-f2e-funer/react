import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../styles/instagram/instagram.scss'
import User from './User'
import Stories from './Stories'
import Bookmark from './Bookmark'
import Event from './Event'
import Battle from './Battle'

class Instagram extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="instagram container">
          <User />
          <Switch>
            <Route exact path="/instagram" component={Stories} />
            <Route exact path="/instagram/bookmark" component={Bookmark} />
            <Route exact path="/instagram/battle" component={Battle} />
          </Switch>
          <Event />
        </div>
      </>
    )
  }
}

export default Instagram
