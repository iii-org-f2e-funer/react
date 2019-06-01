import React from 'react'
import '../../styles/pt_style/member_applyedpt.scss'
import Member_applyermodal from './Member_applyermodal'
import Member_cancelapply from './Member_cancelapply'
import { Link } from 'react-router-dom'
import moment from 'moment'

class Member_applyedpt extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <>
        <div className="applyed">
          <div className="ptimg">
            {this.props.data.pt_img !== '' ? (
              <img
                src={'//localhost:3002/images/event/' + this.props.data.pt_img}
                alt=""
              />
            ) : (
              <img
                src="//localhost:3002/images/event/defaulteventimg.jpg"
                alt=""
              />
            )}
          </div>
          <div className="ptinfo">
            <div className="ptinfo_title">{this.props.data.pt_title}</div>
            <div className="ptinfo_time">
              <div className="infoicon">
                <i className="fas fa-clock" />
              </div>
              <div>
                {' '}
                {moment(this.props.data.pt_time).format('YYYY/MM/DD HH:mm')}
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
            <div className="ptinfo_member">
              {/* <div>6人已報名，3人已參加</div> */}
            </div>
          </div>

          <div className="btnlist">
            {(() => {
              switch (this.props.data.pt_applystatus) {
                case 'pending':
                  return <div className="applystatus">團主審核中</div>
                  break
                case 'reject':
                  return (
                    <div className="applystatus" id="reject">
                      申請失敗
                    </div>
                  )
                  break
                case 'approve':
                  return (
                    <div className="applystatus" id="approve">
                      開啟聊天室
                    </div>
                  )
                  break
              }
            })()}
            <Member_cancelapply
              applysid={this.props.data.pt_applysid}
              cancel={this.props.cancel}
            />
          </div>
        </div>
      </>
    )
  }
}
export default Member_applyedpt
