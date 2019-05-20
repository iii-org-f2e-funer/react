import React from 'react'
import {Card } from 'react-bootstrap'
import '../../styles/pt_style/pt_list.scss'



const Pt_list =()=>{
    return (
        <>
        <div className="container">
        <Card className="card">
            <div className="img_contain"><Card.Img className="card_img" variant="top" src={process.env.PUBLIC_URL + "/images/pt_img/25.png"}/> </div>
            <div className="pt_host d-flex">                
                <div className="host_pic"><img src={process.env.PUBLIC_URL + "/images/pt_img/dr_strange.jpg"} alt=""/></div>
                <div className="host_name">開團人姓名</div> 
            </div>
            <Card.Body className="card_bd">
          <div class="pt_title d-flex justify-content-between">
            <span>神秘or蓋亞 輔大逗桌遊</span>
            <a href=""><i class="fas fa-ellipsis-v"/></a>
          </div>
          <div class="pt_time">
            <i class="fas fa-clock"/>2019/04/18 19:00
          </div>
          <div class="pt_locate">
            <i class="fas fa-map-marker-alt"/>新莊區, 輔大逗桌遊
          </div>
            </Card.Body>
        </Card>
        </div>
        </>
    )
}

export default Pt_list
