import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

import Home from '../components/Home.js'
import GameMapDetail from '../pages/GameMapDetail.js'
import GameMap from '../pages/Map_v2/Map'
import Firm from '../pages/Firm.js'
import CheckCode from '../components/login/CheckCode.js'
import Member from '../pages/Member'
import Footer from '../components/Footer.js'
import Product from '../pages/Product.js'
import Navbar from '../components/Navbar'
import ChatRoom from '../pages/ChatRoom'
import ProductDetail from '../pages/ProductDetail'
import Myfav from '../pages/Myfav'
import Event from '../pages/pt_page/Event'
import Mycart from '../pages/Mycart'
import Shopping1 from '../components/shopprocess/Shopping1'
import Shopping2 from '../components/shopprocess/Shopping2'
import Shopping3 from '../components/shopprocess/Shopping3'
import Instagram from '../components/instagram/Instagram'
import actions from '../redux/action/userInfo.js'
import OpenMemberPage from '../pages/OpenMemberPage'

class RootRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarRefresh: 1,
      preload: true,
    }
  }
  closeAnimate = () => {
    this.setState({ preload: false })
  }
  componentDidMount() {
    fetch('//13.112.90.13:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          if (obj.isFirm) {
            console.log(obj)
            this.props.firmInfoAction({
              account: obj.body.account,
            })
          } else {
            console.log(obj)
            this.props.userInfoAction({
              account: obj.body.member_id,
            })
          }
        }
      })
  }
  avatarRefresh = () => {
    let newState = this.state.avatarRefresh
    newState = newState + 1
    this.setState({ avatarRefresh: newState })
  }
  render() {
    return (
      <Router>
        <>
          <Navbar avatarRefresh={this.state.avatarRefresh} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  closeAnimate={this.closeAnimate}
                  preload={this.state.preload}
                />
              )}
            />

            <Route
              path="/firm/account"
              component={() => <Firm avatarRefresh={this.avatarRefresh} />}
            />
            <Route path="/firm/product_manage" component={() => <Firm />} />
            <Route path="/firm/product_order" component={() => <Firm />} />
            <Route path="/firm/site_manage" component={() => <Firm />} />
            <Route path="/firm/site_order" component={() => <Firm />} />
            <Route exact path="/checkCode" component={CheckCode} />

            <Route
              path="/member/account"
              component={() => <Member avatarRefresh={this.avatarRefresh} />}
            />
            <Route path="/member/userevent" component={() => <Member />} />
            <Route path="/member/UserShopping" component={() => <Member />} />
            <Route
              path="/member/site_reservation"
              component={() => <Member />}
            />
            <Route path="/product" component={Product} />
            <Route
              path={'/chatroom/message/' + 'ID' + this.props.userInfo.account}
              component={ChatRoom}
            />
            <Route path="/chatroom/openMemberPage" component={OpenMemberPage} />
            <Route path="/ProductDetail" component={ProductDetail} />
            <Route path="/Myfav" component={Myfav} />
            <Route
              path="/Mycart"
              component={() => <Mycart show={this.state.show} />}
            />
            <Route path="/Shopping1" component={Shopping1} />
            <Route path="/Shopping2" component={Shopping2} />
            <Route path="/Shopping3" component={Shopping3} />
            <Route path="/instagram" component={Instagram} />
            <Route path="/event" component={Event} />
            <Route path="/gameMap" component={GameMap} />
            <Route path="/gameMapDetail/:id" component={GameMapDetail} />
          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}

function mapStateToProp(store) {
  return {
    userInfo: store.userInfo,
  }
}

export default connect(
  mapStateToProp,
  {
    userInfoAction: actions.userInfo,
    firmInfoAction: actions.firmInfo,
  }
)(RootRouter)
