import React from 'react'

const Pt_applyer = props => {
  return (
    <>
      <div className="pt_applyer">
        {props.applyer.map(item => (
          <div key={item.pt_applysid} className="applyer">
            <img src="http://localhost:3002/img/member/pic1.jpg" alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Pt_applyer
