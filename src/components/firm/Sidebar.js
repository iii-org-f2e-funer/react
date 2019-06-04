import React from 'react'
import Account from '../../components/firm/Account'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import { FaPen } from 'react-icons/fa'

import FirmEdit from './FirmEdit.js'
import Site_manage from './Site_manage.js'
import Site_order from './Site_order.js'
import Product_manage from './product_manage.js'
import Product_order from './product_order.js'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editPopup: false,
      data: {},
    }
  }
  reFresh = () => {
    fetch('//13.112.90.13:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({ data: obj.body })
          console.log(this.state.data)
        } else {
          this.props.history.push('/')
        }
      })
  }
  componentDidMount() {
    fetch('//13.112.90.13:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({ data: obj.body })
          console.log(this.state.data)
        } else {
          this.props.history.push('/')
        }
      })
  }
  handleShow = () => {
    this.setState({ editPopup: true })
  }

  handleHide = () => {
    this.setState({ editPopup: false })
  }
  avatarUpdate = evt => {
    const file = evt.target.files[0]
    const fd = new FormData()
    fd.append('firm_id', this.state.data.sid)
    fd.append('file', file)
    fetch('//13.112.90.13:3002/firm/avatarUpdate', {
      method: 'POST',
      body: fd,
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        fetch('//13.112.90.13:3002/firm/userInfo', {
          credentials: 'include',
        })
          .then(res => res.json())
          .then(obj => {
            if (obj.success) {
              this.setState({ data: obj.body })
              this.props.avatarRefresh()
            } else {
              this.props.history.push('/')
            }
          })
      })
  }
  render() {
    const data = this.state.data
    console.log(data.my_file)
    return (
      <Router>
        <>
          <div className="sidebar">
            <div className="person flex">
              <form action="">
                <div className="img-outter">
                  <div className="avatar-edit">
                    <input
                      id="file-upload"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={this.avatarUpdate}
                    />
                    <label htmlFor="file-upload" className="pen">
                      <FaPen />
                    </label>
                  </div>
                  <div className="circle">
                    {data.my_file === null || data.my_file === '' ? (
                      <img
                        alt=""
                        src={
                          process.env.PUBLIC_URL +
                          '/images/member/preset_avatar.png'
                        }
                      />
                    ) : (
                      <img
                        alt="無法顯示"
                        src={
                          'http://13.112.90.13:3002/images/firm/' + data.my_file
                        }
                      />
                    )}
                  </div>
                </div>
              </form>

              <div className="info">
                <h5>{data.firmname}</h5>
                <div className="email">{data.account}</div>
                <button className="button" onClick={this.handleShow}>
                  店家場地資訊
                </button>
              </div>
            </div>

            <div className="sidebar_link">
              <ul>
                <li>
                  <NavLink to="/firm/account" activeClassName="active">
                    帳號設定
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/firm/product_manage">商品管理</NavLink>
                </li>
                <li>
                  <NavLink to="/firm/product_order">商品訂單</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/firm/site_manage">場地管理</NavLink>
                </li> */}
                <li>
                  <NavLink to="/firm/site_order">場地預約訂單</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="firmManage_info">
            <Switch>
              <Route
                path="/firm/account"
                component={() => <Account reFresh={this.reFresh} />}
              />
              <Route path="/firm/product_manage" component={Product_manage} />
              <Route path="/firm/product_order" component={Product_order} />
              <Route path="/firm/site_manage" component={Site_manage} />
              <Route path="/firm/site_order" component={Site_order} />
            </Switch>
          </div>
          <FirmEdit
            editPopup={this.state.editPopup}
            handleHide={this.handleHide}
            data={this.state.data}
          />
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

export default withRouter(
  connect(
    mapStateToProp,
    {
      userInfoAction: actions.userInfo,
    }
  )(Sidebar)
)
