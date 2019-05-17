import React from 'react'
import { Media } from 'react-bootstrap'
import Account from '../../components/firm/Account'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Media>
          <div className="img-outter">
            <div className="avatar">
              <img
                src={process.env.PUBLIC_URL + '/images/personalFolder/logo.png'}
              />
            </div>
          </div>
          <Media.Body>
            <p>桌遊糖果城</p>
            <p>candycity@gmail.tw</p>
            <button className="btn">編輯店家資料</button>
          </Media.Body>
        </Media>
        <div className="sidebar_link">
          <ul>
            <li>
              <Link to="/">帳號設定</Link>
            </li>
            <li>
              <Link to="/firm/product_manage">商品管理</Link>
            </li>
            <li>
              <Link to="/firm/product_order">商品訂單</Link>
            </li>
            <li>
              <Link to="/firm/site_manage">場地管理</Link>
            </li>
            <li>
              <Link to="/firm/site_order">場地預約訂單</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Account} />
            <Route path="/firm/product_manage" component={Account} />
            <Route path="/firm/product_order" component={Account} />
            <Route path="/firm/site_manage" component={Account} />
            <Route path="/firm/site_order" component={Account} />
          </Switch>
        </div>
        <input type="search"></input>
      </div>
    </>
  )
}

export default Sidebar
