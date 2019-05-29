import React from 'react'
import Account from '../../components/firm/Account'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FirmEdit from './FirmEdit.js'
import Site_manage from './Site_manage.js'
import { FaPen } from 'react-icons/fa'


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
  avatarUpdate = evt => {
    const file = evt.target.files[0]
    const fd = new FormData()
    fd.append('firm_id', this.state.data.sid)
    fd.append('file', file)
    fetch('//localhost:3002/firm/avatarUpdate', {
      method: 'POST',
      body: fd,
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
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
      })
  }
  render() {
    const data = this.state.data
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
                    <img
                      alt="無法顯示"
                      src={
                        'http://localhost:3002/images/firm/' +
                        this.state.data.my_file
                      }
                    />
                  </div>
                </div>
              </form>

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
              <Route path="/firm/site_manage" component={Site_manage} />
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
