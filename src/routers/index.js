import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import React from 'react'
import Demopage from '../pages/demopage.js'
import GameMapDetail from '../pages/GameMapDetail.js'

function RootRouter() {
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo">demo</Link>
          </li>
          <li>
            <Link to="/gamemap">gameMap</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Demopage} />
          <Route path="/about" component={Demopage} />
          <Route path="/gamemap" component={GameMapDetail} />
        </Switch>
      </>
    </Router>
  )
}
export default RootRouter
