import React from 'react'
import '../../styles/pt_style/pt_detail.scss'
import { Link, NavLink } from 'react-router-dom'
import Pt_detailrouter from '../../routers/Pt_detailrouter'
import Pt_applymodal from '../../components/event/Pt_applymodal'

class Pt_detail extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  applyclick = e => {
    this.setState({ applymodalshow: true })
    console.log(this)
  }
  handleClose() {
    this.setState({ applymodalshow: false })
  }
  handleShow() {
    this.setState({ applymodalshow: true })
  }

  render() {
    return (
      <>
        <div className="ptdetail_container">
          <div className="ptdetail_host">
            <div className="ptdetail_hostimg">
              <img src="/images/pt_img/dr_strange.jpg" alt="" />
            </div>
            <div className="ptdetail_hostname">奇異博士</div>
          </div>
          <div className="ptdetail_info">
            <div className="ptinfo_up">
              <div className="ptinfo_img">
                <img
                  src="/images/pt_img/nature-wallpaper-hd-with-macro-photo-of-red-herbras-flower-600x400.jpg"
                  alt=""
                />
              </div>
              <div className="ptinfo_colright">
                <div className="ptinfo">
                  <div className="ptinfo_title">神秘or蓋亞 輔大逗桌遊</div>
                  <div className="ptinfo_time">
                    <div className="infoicon">
                      <i className="fas fa-clock" />
                    </div>
                    <div>
                      <div id="starttime">2019/04/18, 19:00</div>
                      <div id="deadlinetime">2019/04/17, 18:00截止揪團</div>
                    </div>
                  </div>
                  <div className="ptinfo_locate">
                    <div className="infoicon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>新北市 新莊區 輔大逗桌遊</div>
                  </div>
                  <div className="ptinfo_member">
                    <div className="infoicon">
                      <i className="fas fa-user-friends" />
                    </div>
                    <div>3 - 6 人</div>
                  </div>
                  <div className="ptinfo_level">
                    <div className="infoicon">
                      <div className="leveldot" />
                    </div>
                    <div>新手</div>
                  </div>
                </div>
                <div className="pt_apply">
                  <div className="pt_apply_title">申請人</div>
                  <div className="pt_applyer" />
                </div>
                <div className="pt_applybtn" />
                <Pt_applymodal />
                <div className="pt_share" />
              </div>
            </div>
            <div className="ptinfo_bottom">
              <div className="ptinfo_bottom_nav">
                <ul>
                  <li>
                    <NavLink to="/event/id/" activeClassName="active" exact>
                      主揪介紹
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/event/id/quest" activeClassName="active">
                      留言
                    </NavLink>
                  </li>
                </ul>
              </div>
              <Pt_detailrouter />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Pt_detail