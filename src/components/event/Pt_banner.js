import React from 'react'
import '../../styles/pt_style/pt_banner.scss'
import { Link } from 'react-router-dom'
// import actions from '../../redux/action/userInfo.js'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router'

const Pt_banner = props => {
  return (
    <>
      <div className="pt_banner">
        <div className="pt_banner_title">一場桌遊，交到你的新朋友</div>

        <button className="btn_newpt" onClick={props.check}>
          <img id="newpt_icon" src="/images/pt_img/newpt_icon.png" alt="" />{' '}
          我要開團
        </button>

        <img id="pt_monster" src="/images/pt_img/purple monster.png" alt="" />
      </div>
    </>
  )
}

// function mapStateToProp(store) {
//   return {
//     userInfo: store.userInfo,
//   }
// }

// export default withRouter(
//   connect(
//     mapStateToProp,
//     {
//       userInfoAction: actions.userInfo,
//     }
//   )(Pt_banner)
// )

export default Pt_banner