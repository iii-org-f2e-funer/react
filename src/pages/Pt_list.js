import React from 'react'
import {Card } from 'react-bootstrap'
import '../styles/pt_style/pt_list.scss'



const Pt_list =()=>{
    return (
        <>
        <Card className="card">
            <Card.Img className="card_img" variant="top" src={process.env.PUBLIC_URL + "/images/pt_img/25.png"}/> 
            <div className="pt_host d-flex">                
                <div className="host_pic"><img src={process.env.PUBLIC_URL + "/images/pt_img/dr_strange.jpg"} alt=""/></div>
                <div className="host_name">開團人姓名</div> 
            </div>
            <Card.Body>
          <div class="pt_title">
            <div class="flex">神秘or蓋亞 輔大逗桌遊</div>
            <a href=""><i class="fas fa-ellipsis-v"/></a>
          </div>
          <div class="pt_time">
            <i class="fas fa-clock"></i>2019/04/18 19:00
          </div>
          <div class="pt_locate">
            <i class="fas fa-map-marker-alt"></i>新莊區, 輔大逗桌遊
          </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default Pt_list
