import React from 'react'
import '../../styles/pt_style/pt_banner.scss'
import { Link } from 'react-router-dom'

const Pt_banner = () => {
  return (
    <>
      <div className="pt_banner">
        <div className="pt_banner_title">一場桌遊，交到你的新朋友</div>
        <Link to="/event/new">
          <button className="btn_newpt">
            <img id="newpt_icon" src="/images/pt_img/newpt_icon.png" alt="" />{' '}
            我要開團
          </button>
        </Link>
        <img id="pt_monster" src="/images/pt_img/purple monster.png" alt="" />
      </div>
    </>
  )
}

export default Pt_banner
