import React from 'react'
import { Link } from 'react-router-dom'

const Pt_applyer = props => {
  return (
    <>
      <div className="pt_applyer">
        {props.applyer.map(item => (
          <Link
            to={'/chatroom/openMemberPage/' + 'ID' + item.member_id} title={item.name}
          >
            <div key={item.pt_applysid} className="applyer">
              <img src="http://localhost:3002/images/member/pic1.jpg" alt="" />
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Pt_applyer
