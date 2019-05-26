import React from 'react'
import Account from '../../components/firm/Account'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FirmEdit from './FirmEdit.js'
import { withRouter } from 'react-router'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editPopup: false,
      data: [],
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({ data: obj.body })
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
  render() {
    const data = this.state.data
    return (
      <Router>
        <>
          <div className="sidebar">
            <div className="person flex">
              <div className="img-outter">
                <img src={process.env.PUBLIC_URL + this.state.data.my_file} />
              </div>
              <div className="info">
                <h5>{data.firmname}</h5>
                <div className="email">{data.email}</div>
                <button className="button" onClick={this.handleShow}>
                  編輯店家資料
                </button>
              </div>
            </div>

            <div className="sidebar_link">
              <ul>
                <li>
                  <Link to="/firm">帳號設定</Link>
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
            </div>
          </div>
          <div className="manage_info">
            <Switch>
              <Route path="/firm" component={Account} />
              <Route path="/firm/product_manage" component={Account} />
              <Route path="/firm/product_order" component={Account} />
              <Route path="/firm/site_manage" component={Account} />
              <Route path="/firm/site_order" component={Account} />
            </Switch>
          </div>
          <FirmEdit
            editPopup={this.state.editPopup}
            handleHide={this.handleHide}
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
