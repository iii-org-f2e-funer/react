import React from 'react'
import { Link } from 'react-router-dom'

const Member_applyeritem = props => {
  return (
    <>
      <div className="applyeder">
        <Link to={'/chatroom/openMemberPage/' + 'ID' + props.data.member_id}>
          <div className="applyerimg">
            {(() => {
              switch (props.data.photo) {
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
                      src={'//13.112.90.13:3002/images/member/' + props.data.photo}
                      alt=""
                    />
                  )
                  break
              }
            })()}
          </div>
        </Link>
        <div className="applyername">
          <div>
            <Link
              to={'/chatroom/openMemberPage/' + 'ID' + props.data.member_id}
            >
              {props.data.pt_applymember}
            </Link>
          </div>
          <div>想參加你的開團</div>
        </div>

        <div className="applyerbtn">
          <div onClick={props.handleapprove}>
            <i className="fas fa-check-circle" style={{ color: '#6ec4d2' }} />
          </div>
          <div onClick={props.handlereject}>
            <i className="fas fa-times-circle" style={{ color: '#EC6A6A' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Member_applyeritem
