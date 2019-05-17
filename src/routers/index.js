import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import React from 'react'
import Demopage from '../pages/demopage.js'
import Firm from '../pages/Firm.js'
import Footer from '../components/Footer.js'
import Product from '../pages/Product.js'


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
            <Link to="/firm">firm</Link>
          </li>
          <li>
            <Link to="/product">product</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Demopage} />
          <Route path="/demo" component={Demopage} />
          <Route path="/firm" component={Firm} />
          <Route path="/product" component={Product} />
        </Switch>
        <Footer />
      </>
    </Router>
  )
}
export default RootRouter
