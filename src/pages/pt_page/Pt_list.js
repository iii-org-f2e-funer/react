import React from 'react'
import { Card } from 'react-bootstrap'
import '../../styles/pt_style/pt_list.scss'
import { Link } from 'react-router-dom'
import Pt_banner from './Pt_banner'
import Pt_Router from '../../routers/Pt_router'

const Pt_list = () => {
  return (
    <>
      <Pt_banner />
      <div className="container">
        <Card className="card">
          <div className="img_contain">
            <Card.Img
              className="card_img"
              variant="top"
              src={process.env.PUBLIC_URL + '/images/pt_img/25.png'}
            />{' '}
          </div>
          <div className="pt_host d-flex">
            <div className="host_pic">
              <img
                src={process.env.PUBLIC_URL + '/images/pt_img/dr_strange.jpg'}
                alt=""
              />
            </div>
            <div className="host_name">開團人姓名</div>
          </div>
          <Card.Body className="card_bd">
            <div className="pt_title d-flex justify-content-between">
              <span>神秘or蓋亞 輔大逗桌遊</span>
              <a href="">
                <i className="fas fa-ellipsis-v" />
              </a>
            </div>
            <div className="pt_time">
              <i className="fas fa-clock" />
              2019/04/18 19:00
            </div>
            <div className="pt_locate">
              <i className="fas fa-map-marker-alt" />
              新莊區, 輔大逗桌遊
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* <Pt_Router /> */}
    </>
  )
}

export default Pt_list
