import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import React from 'react'
import Demopage from '../pages/demopage.js'
import Pt_list from '../pages/pt_page/Pt_list'
import Pt_new from '../pages/pt_page/Pt_new'


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
            <Link to="/pt_list">揪團</Link>
          </li>
          <li>
            <Link to="/pt_new">新揪團</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Demopage} />
          <Route path="/demo" component={Demopage} />
          <Route path="/pt_list" component={Pt_list} />
          <Route path="/pt_new" component={Pt_new} />

        </Switch>
      </>
    </Router>
  )
}
export default RootRouter
