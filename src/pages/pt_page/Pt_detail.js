import React from 'react'
import '../../styles/pt_style/pt_detail.scss'
import { Link, NavLink } from 'react-router-dom'
import { Button, Tabs, Tab } from 'react-bootstrap'
import Pt_applymodal from '../../components/event/Pt_applymodal'
import Pt_applyer from '../../components/event/Pt_applyer'
import Pt_infointro from '../../components/event/Pt_infointro'
import Pt_qa from './Pt_qa'

import moment from 'moment'

class Pt_detail extends React.Component {
  constructor() {
    super()

    this.loadapplyer = this.loadapplyer.bind(this)

    this.state = {
      data: [],
      applyer: [],
    }
  }

  componentDidMount() {
    this.loadptinfo()
    this.loadapplyer()
  }

  loadptinfo() {
    let data = JSON.stringify({ ptsid: window.location.pathname.split('/')[3] })
    // console.log(data)
    fetch('//localhost:3002/event/ptinfo', {
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

    fetch('//localhost:3002/event/ptapplyer', {
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
    return (
      <>
        <div className="ptdetail_container">
          <div className="ptdetail_host">
            <div className="ptdetail_hostimg">
              <img src="/images/pt_img/dr_strange.jpg" alt="" />
            </div>
            <div className="ptdetail_hostname">{this.state.data.name}</div>
          </div>
          <div className="ptdetail_info">
            <div className="ptinfo_up">
              <div className="ptinfo_img">
                <img src={this.state.data.pt_img} alt="" />
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
                <Pt_applymodal
                  ptapply={this.state.data}
                  handlerender={this.loadapplyer}
                />
                <div className="pt_share" />
              </div>
            </div>
            <div className="ptinfo_bottom">
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="主揪介紹">
                  <Pt_infointro />
                </Tab>
                <Tab eventKey="profile" title="留言">
                <Pt_qa />
                </Tab>
              </Tabs>
              {/* <div className="ptinfo_bottom_nav">
                <ul>
                  <li>
                    <NavLink
                      to={'/event/info/' + this.state.data.pt_sid}
                      activeClassName="active"
                      exact
                    >
                      主揪介紹
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/event/info/' + this.state.data.pt_sid + '/quest'}
                      activeClassName="active"
                    >
                      留言
                    </NavLink>
                  </li>
                </ul>
              </div>
              <Pt_detailrouter ptsid={this.state.data.pt_sid}/> */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Pt_detail
