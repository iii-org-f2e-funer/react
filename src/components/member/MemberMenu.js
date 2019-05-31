// 左方Sidebar + Link
import React from 'react'
import actions from '../../redux/action/userInfo.js'
import UserAccount from './UserAccount'
import UserEvent from './UserEvent'
import UserShopping from './UserShopping'
// import UserMail from './UserMail'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import MemberEdit from './MemberEdit.js'
// import Site_manage from './Site_manage.js'
import { FaPen } from 'react-icons/fa'

class MemberMenu extends React.Component {
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
        // console.log(obj.body)
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
          {/* pho */}
          <div className="sidebar">
            <div className="person flex">
              <form action="">
                <div className="img-outter">
                  <div className="avatar-edit">
                    <input
                      id="file-upload"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label htmlFor="file-upload" className="pen">
                      <FaPen />
                    </label>
                  </div>
                  <div className="circle">
                    <img
                      alt="無法顯示"
                      src={
                        process.env.PUBLIC_URL +
                        '/images/personalFolder/logo.png'
                      }
                    />
                  </div>
                </div>
              </form>
              {/*            UserInfo         */}
              <div className="info">
                <h5>{data.nickname}</h5>
                <div className="email mb-3">{data.account}</div>
                <button className="button" onClick={this.handleShow}>
                  編輯個人資料
                </button>
              </div>
            </div>
            {/*            sidebar_link          */}
            <div className="sidebar_link">
              <ul>
                <li>
                  <NavLink to="/member/account" activeClassName="active">
                    帳號設定
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/member/userevent">我的揪團</NavLink>
                </li>
                <li>
                  <NavLink to="/member/UserShopping">訂單查詢</NavLink>
                </li>
                <li>
                  <NavLink to="/member/userSite">場地預定查詢</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="firmManage_info">
            <Switch>
              <Route path="/member/account" component={UserAccount} />
              <Route path="/member/userevent" component={UserEvent} />
              <Route path="/member/usershopping" component={UserShopping} />
              {/* <Route path="/member/userSite" component={Site_manage} /> */}
              {/* <Route path="/usermail" component={UserMail} /> */}
            </Switch>
          </div>
          {/* <FirmEdit
            editPopup={this.state.editPopup}
            handleHide={this.handleHide}
          /> */}
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
  )(MemberMenu)
)
