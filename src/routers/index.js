import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Demopage from '../pages/demopage.js'

import GameMapDetail from '../pages/GameMapDetail.js'
import GameMap from '../pages/Map_v2/Map'
import Firm from '../pages/Firm.js'
import Footer from '../components/Footer.js'
import Product from '../pages/Product.js'

import Navbar from '../components/Navbar'
import ChatRoom from '../pages/ChatRoom'
import ProductDetail from '../pages/ProductDetail'
import Myfav from '../pages/Myfav'
import Mycart from '../pages/Mycart'

function RootRouter() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Demopage} />
          <Route path="/demo" component={Demopage} />
          <Route path="/firm" component={Firm} />
          <Route path="/product" component={Product} />
          <Route path="/chatroom" component={ChatRoom} />
          <Route path="/ProductDetail" component={ProductDetail} />
          <Route path="/Myfav" component={Myfav} />
          <Route path="/Mycart" component={Mycart} />
          <Route path="/gameMap" component={GameMap} />
          <Route path="/gameMapDetail/:id" component={GameMapDetail} />
        </Switch>
        <Footer />
      </>
    </Router>
  )
}
export default RootRouter
