import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Pt_listitem = () => {
  return (
    <>
      <Link to="/event/id">
        <Card className="card">
          <div className="img_contain">
            <Card.Img
              className="card_img"
              variant="top"
              src={process.env.PUBLIC_URL + '/images/pt_img/nature-wallpaper-hd-with-macro-photo-of-red-herbras-flower-600x400.jpg'}
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
      </Link>
    </>
  )
}

export default Pt_listitem
