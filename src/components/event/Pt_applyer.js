import React from 'react'
import { Link } from 'react-router-dom'

const Pt_applyer = props => {
  return (
    <>
      <div className="pt_applyer">
        {props.applyer.map(item => (
          <Link
            to={'/chatroom/openMemberPage/' + 'ID' + item.member_id}
            title={item.name}
          >
            <div key={item.pt_applysid} className="applyer">
              {(() => {
                switch (item.photo) {
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
                        src={'//13.112.90.13:3002/images/member/' + item.photo}
                        alt=""
                      />
                    )
                    break
                }
              })()}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Pt_applyer
