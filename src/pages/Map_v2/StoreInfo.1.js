import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './map.scss'
import { FaMapMarkerAlt, FaPhone, FaClock, FaTags } from 'react-icons/fa'

class StoreInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="storeInfo">
          <div className="storeTop">
            <img className="storeLogo" src={this.props.storeLogoUrl} alt="" />
            <h3 className="storeName">{this.props.storeName}</h3>
          </div>
          <hr />
          <div className="storeBottom">
            <div className="d-flex flex-row align-items-center">
              <FaMapMarkerAlt className="storeFa mx-1" />
              <span>地址：{this.props.storeAdd}</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <FaPhone className="storeFa mx-1" />
              <span>電話：{this.props.storeTel}</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <FaClock className="storeFa mx-1" />
              <span>營業時間：{this.props.storeHourWeekday}</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <FaTags className="storeFa mx-1" />
              <span>該場館目前提供服務的遊戲如下：</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default StoreInfo
