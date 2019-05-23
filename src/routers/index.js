import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Demopage from '../pages/demopage.js'
import GameMapDetail from '../pages/GameMapDetail.js'
import Firm from '../pages/Firm.js'
import Footer from '../components/Footer.js'
import Product from '../pages/Product.js'
import Navbar from '../components/Navbar'
import ChatRoom from '../pages/ChatRoom'
import ProductDetail from '../pages/ProductDetail'
import Myfav from '../pages/Myfav'
import Event from '../pages/pt_page/Event'
import Mycart from '../pages/Mycart'
import Shopping1 from '../components/shopprocess/Shopping1'
import Instagram from '../components/instagram/Instagram'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'

class RootRouter extends React.Component {
  componentDidMount() {
    fetch('//localhost:3002/firm/userInfo')
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.props.userInfoAction({ account: obj.body.account })
        }
      })
  }
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Demopage} />
            <Route path="/gamemap" component={GameMapDetail} />
            <Route path="/demo" component={Demopage} />
            <Route path="/firm" component={Firm} />
            <Route path="/event" component={Event} />
            <Route path="/product" component={Product} />
            <Route path="/chatroom" component={ChatRoom} />
            <Route path="/ProductDetail" component={ProductDetail} />
            <Route path="/Myfav" component={Myfav} />
            <Route path="/Mycart" component={Mycart} />
            <Route path="/Shopping1" component={Shopping1} />

            <Route path="/instagram" component={Instagram} />
          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}

const mapStateToProp = store => {
  return store
}

export default connect(
  mapStateToProp,
  {
    userInfoAction: actions.userInfo,
  }
)(RootRouter)
