import React from 'react'
import '../../styles/pt_style/member_applyedpt.scss'
import Member_applyermodal from './Member_applyermodal'

import { Link } from 'react-router-dom'
import moment from 'moment'

class Member_hostedpt extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [],
    }
  }
  url = str => () => {
    document.location.href = str
  }
  render() {
    return (
      <>
        <div className="applyed">
          <Link
            to="#"
            onClick={this.url('/event/info/' + this.props.data.pt_sid)}
          >
            <div className="ptimg">
              {this.props.data.pt_img !== '' ? (
                <img
                  src={
                    '//13.112.90.13:3002/images/event/' + this.props.data.pt_img
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
          </Link>
          <div className="ptinfo">
            <Link
              to="#"
              onClick={this.url('/event/info/' + this.props.data.pt_sid)}
            >
              <div className="ptinfo_title">{this.props.data.pt_title}</div>
            </Link>
            <div className="ptinfo_time">
              <div className="infoicon">
                <i className="fas fa-clock" />
              </div>
              <div>
                {' '}
                {moment(this.props.data.pt_time)
                  .zone('-00:00')
                  .format('YYYY/MM/DD HH:mm')}
              </div>
            </div>
            <div className="ptinfo_locate">
              <div className="infoicon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                {this.props.data.pt_city}, {this.props.data.pt_dist}{' '}
                {this.props.data.pt_add}
              </div>
            </div>
            {/* <div className="ptinfo_member">
              <div>6人已報名，3人已參加</div>
            </div> */}
          </div>

          <div className="btnlist">
            {(() => {
              switch (this.props.data.pt_state) {
                case 0:
                  return <div className="applystatus">已取消</div>
                  break
                case 1:
                  return (
                    <>
                      <Link
                        to="#"
                        onClick={this.url(
                          '/event/edit/' + this.props.data.pt_sid
                        )}
                      >
                        <button className="applyclick" id="editbtn">
                          編輯揪團
                        </button>
                      </Link>
                      <Member_applyermodal pt_sid={this.props.data.pt_sid} />
                      {/* <div className="applystatus" id="approve">
                        開啟聊天室
                      </div> */}
                    </>
                  )
                  break
              }
            })()}
          </div>
        </div>
      </>
    )
  }
}
export default Member_hostedpt
