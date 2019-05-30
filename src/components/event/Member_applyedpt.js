import React from 'react'
import '../../styles/pt_style/member_applyedpt.scss'
import Member_applyermodal from './Member_applyermodal'
import Member_cancelapply from './Member_cancelapply'
import { Link } from 'react-router-dom'

class Member_applyedpt extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [],
    }
  }

  render() {
    return (
      <>
        <div className="applyed">
          <div className="ptimg">
            <img src="" alt="" />
          </div>
          <div className="ptinfo">
            <div className="ptinfo_title">神秘or蓋亞 輔大逗桌遊</div>
            <div className="ptinfo_time">
              <div className="infoicon">
                <i className="fas fa-clock" />
              </div>
              <div>2019/04/18, 19:00</div>
            </div>
            <div className="ptinfo_locate">
              <div className="infoicon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>台北市,大安區 資策會</div>
            </div>
            <div className="ptinfo_member">
              <div>6人已報名，3人已參加</div>
            </div>
          </div>

          <div className="btnlist">
            {/* <div className="applystatus">團主審核中</div>
            <div className="applystatus">申請失敗</div>
            <div className="applystatus">申請成功</div> */}
            <Link to="/event/edit/">
              <button className="applyclick">編輯揪團</button>
            </Link>
            <Member_cancelapply />
            <Member_applyermodal />
          </div>
        </div>
      </>
    )
  }
}
export default Member_applyedpt
