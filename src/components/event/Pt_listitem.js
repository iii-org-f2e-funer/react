import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import moment from 'moment'

const Pt_listitem = props => {
  return (
    <>
      <Link to={'/event/' + props.data.pt_sid}>
        <div className={'card' + ' ' + props.data.pt_level}>
          <div className="img_contain">
            <Card.Img
              className="card_img"
              variant="top"
              src={props.data.pt_img}
              // {
              //   process.env.PUBLIC_URL +
              //   '/images/pt_img/nature-wallpaper-hd-with-macro-photo-of-red-herbras-flower-600x400.jpg'
              // }
            />
          </div>
          <div className="pt_host d-flex">
            <div className="host_pic">
              <img
                src={process.env.PUBLIC_URL + '/images/pt_img/dr_strange.jpg'}
                alt=""
              />
            </div>
            <div className="host_name">{props.data.pt_host}</div>
          </div>
          <Card.Body className="card_bd">
            <div className="pt_title d-flex justify-content-between">
              <span>{props.data.pt_title}</span>
              <a href="">
                <i className="fas fa-ellipsis-v" />
              </a>
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
    </>
  )
}

export default Pt_listitem
