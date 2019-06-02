import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import moment from 'moment'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Pt_listitem = props => {
  return (
    <>
      <div className={'card' + ' ' + props.data.pt_level}>
        <Link to={'/event/info/' + props.data.pt_sid}>
          <div>
            <div className="img_contain">
              {/* <Card.Img
                className="card_img"
                variant="top"
                src={'//localhost:3002/images/event/' + props.data.pt_img}
              /> */}
              {props.data.pt_img !== '' ? (
                <Card.Img
                  className="card_img"
                  variant="top"
                  src={'//localhost:3002/images/event/' + props.data.pt_img}
                />
              ) : (
                <Card.Img
                  className="card_img"
                  variant="top"
                  src="//localhost:3002/images/event/defaulteventimg.jpg"
                />
              )}
            </div>
            <div className="pt_host d-flex">
              <Link
                to={'/chatroom/openMemberPage/' + 'ID' + props.data.member_id}
              >
                <div className="host_pic">
                  {(() => {
                    switch (props.data.photo) {
                      case '':
                        return (
                          <img
                            src="//localhost:3002/images/member/preset_avatar.png"
                            alt=""
                          />
                        )
                        break
                      case null:
                        return (
                          <img
                            src="//localhost:3002/images/member/preset_avatar.png"
                            alt=""
                          />
                        )
                        break
                      default:
                        return (
                          <img
                            src={
                              '//localhost:3002/images/member/' +
                              props.data.photo
                            }
                            alt=""
                          />
                        )
                        break
                    }
                  })()}
                  {/* {props.data.photo === '' ? (
                    <img
                      src="//localhost:3002/images/member/preset_avatar.png"
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                  {props.data.photo === null ? (
                    <img
                      src="//localhost:3002/images/member/preset_avatar.png"
                      alt=""
                    />
                  ) : (
                    ''
                  )} */}
                </div>
              </Link>
              <Link
                to={'/chatroom/openMemberPage/' + 'ID' + props.data.member_id}
              >
                <div className="host_name">{props.data.pt_host}</div>
              </Link>
            </div>
            <Card.Body className="card_bd">
              <div className="pt_title d-flex justify-content-between">
                <span>{props.data.pt_title}</span>
                {/* <Link to="">
                  <i className="fas fa-ellipsis-v" />
                </Link> */}
              </div>
              <div className="pt_time">
                <i className="fas fa-clock" />
                {moment(props.data.pt_time).format('YYYY/MM/DD HH:mm')}
              </div>
              <div className="pt_locate">
                <i className="fas fa-map-marker-alt" />
                {props.data.pt_city}, {props.data.pt_dist}
              </div>
            </Card.Body>
          </div>
        </Link>
      </div>
    </>
  )
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
  )(Pt_listitem)
)
