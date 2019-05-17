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

import Firm from '../pages/Firm.js'
import Footer from '../components/Footer.js'
import Product from '../pages/Product.js'

import Navbar from '../components/Navbar'

function RootRouter() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Demopage} />
          <Route path="/about" component={Demopage} />
          <Route path="/gamemap" component={GameMapDetail} />
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
