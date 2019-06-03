import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/pt_style/pt_detail.scss'

import { Tabs, Tab } from 'react-bootstrap'
import Pt_applymodal from '../../components/event/Pt_applymodal'
import Pt_applyer from '../../components/event/Pt_applyer'
import Pt_infointro from '../../components/event/Pt_infointro'
import Pt_qa from './Pt_qa'

import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import moment from 'moment'

class Pt_detail extends React.Component {
  constructor() {
    super()

    this.loadapplyer = this.loadapplyer.bind(this)

    this.state = {
      data: [],
      applyer: [],
      account: [],
      loaded: false,
      intro: '',
    }
  }
  componentDidMount() {
    //抓揪團資料
    this.loadptinfo()

    //抓申請人資料
    this.loadapplyer()

    //抓登入資料
    if (this.props.userInfo.login) {
      fetch('//13.112.90.13:3002/firm/userInfo', {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(obj => {
          console.log(obj.body)
          this.setState({
            account: obj.body.account,
            loaded: true,
          })
        })
    } else {
      this.setState({
        loaded: true,
      })
    }
  }

  loadptinfo() {
    let data = JSON.stringify({ ptsid: window.location.pathname.split('/')[3] })
    // console.log(data)
    fetch('//13.112.90.13:3002/event/ptinfopage', {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        this.setState({ data: obj })
      })
  }

  loadapplyer() {
    let data = JSON.stringify({ ptsid: window.location.pathname.split('/')[3] })

    fetch('//13.112.90.13:3002/event/ptapplyer', {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        // console.log(obj)
        this.setState({ applyer: obj })
      })
  }

  render() {
    if (!this.props.userInfo) return null
    return (
      <>
        <div className="ptdetail_container">
          <div className="ptdetail_host">
            <Link
              to={
                '/chatroom/openMemberPage/' + 'ID' + this.state.data.member_id
              }
            >
              <div className="ptdetail_hostimg">
                {(() => {
                  switch (this.state.data.photo) {
                    case '':
                      return (
                        <img
                          src="//13.112.90.13:3002/images/member/preset_avatar.png"
                          alt=""
                        />
                      )
                      break
                    case null:
                      return (
                        <img
                          src="//13.112.90.13:3002/images/member/preset_avatar.png"
                          alt=""
                        />
                      )
                      break
                    default:
                      return (
                        <img
                          src={
                            '//13.112.90.13:3002/images/member/' +
                            this.state.data.photo
                          }
                          alt=""
                        />
                      )
                      break
                  }
                })()}
              </div>
            </Link>
            <Link
              to={
                '/chatroom/openMemberPage/' + 'ID' + this.state.data.member_id
              }
            >
              <div className="ptdetail_hostname">{this.state.data.name}</div>
            </Link>
          </div>
          <div className="ptdetail_info">
            <div className="ptinfo_up">
              <div className="ptinfo_img">
                {this.state.data.pt_img !== '' ? (
                  <img
                    src={
                      '//13.112.90.13:3002/images/event/' + this.state.data.pt_img
                    }
                    alt=""
                  />
                ) : (
                  <img
                    src="//13.112.90.13:3002/images/event/defaulteventimg.jpg"
                    alt=""
                  />
                )}
              </div>
              <div className="ptinfo_colright">
                <div className="ptinfo">
                  <div className="ptinfo_title">{this.state.data.pt_title}</div>
                  <div className="ptinfo_time">
                    <div className="infoicon">
                      <i className="fas fa-clock" />
                    </div>
                    <div>
                      <div id="starttime">
                        {moment(this.state.data.pt_time).format(
                          'YYYY/MM/DD HH:mm'
                        )}
                      </div>
                      <div id="deadlinetime">
                        {moment(this.state.data.pt_endtime).format(
                          'YYYY/MM/DD HH:mm'
                        )}
                        截止揪團
                      </div>
                    </div>
                  </div>
                  <div className="ptinfo_locate">
                    <div className="infoicon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                      {this.state.data.pt_city},{this.state.data.pt_dist}{' '}
                      {this.state.data.pt_add}
                    </div>
                  </div>
                  <div className="ptinfo_member">
                    <div className="infoicon">
                      <i className="fas fa-user-friends" />
                    </div>
                    <div>
                      {this.state.data.pt_member} - {this.state.data.pt_maxm} 人
                    </div>
                  </div>
                  <div className="ptinfo_level">
                    {(() => {
                      switch (this.state.data.pt_level) {
                        case 'normal':
                          return (
                            <>
                              <div className="infoicon">
                                <div
                                  className="leveldot"
                                  style={{ backgroundColor: '#F9C149' }}
                                />
                              </div>
                              <div>適合有基礎的玩家</div>
                            </>
                          )
                          break
                        case 'hard':
                          return (
                            <>
                              <div className="infoicon">
                                <div
                                  className="leveldot"
                                  style={{ backgroundColor: '#EC6A6A' }}
                                />
                              </div>
                              <div>高難度重度燒腦策略</div>
                            </>
                          )
                          break
                        default:
                          return (
                            <>
                              <div className="infoicon">
                                <div
                                  className="leveldot"
                                  style={{ backgroundColor: '#56b08d' }}
                                />
                              </div>
                              <div>歡迎新手</div>
                            </>
                          )
                      }
                    })()}
                  </div>
                </div>
                <div className="pt_apply">
                  <div className="pt_apply_title">申請人</div>
                  <Pt_applyer applyer={this.state.applyer} />
                </div>
                <div className="pt_applybtn" />
                {!this.props.userInfo.login ? (
                  <>
                    <button className="applybtn" id="disable">
                      請先登入
                    </button>
                  </>
                ) : (
                  <Pt_applymodal
                    ptapply={this.state.data}
                    handlerender={this.loadapplyer}
                    accountID={this.props.userInfo.account}
                  />
                )}
                <div className="pt_share" />
              </div>
            </div>
            <div className="ptinfo_bottom">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="主揪介紹">
                  <Pt_infointro intro={this.state.data.pt_info} />
                </Tab>
                {/* <Tab eventKey="profile" title="留言">
                  <Pt_qa />
                </Tab> */}
              </Tabs>
            </div>
          </div>
        </div>
      </>
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
  )(Pt_detail)
)
