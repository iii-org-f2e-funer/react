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
          <div>{this.props.storeLogoUrl}</div>
          <div>{this.props.storeName}</div>
          <div>{this.props.storeAdd}</div>
          <div>{this.props.storeTel}</div>
          <div>{this.props.storeHourWeekday}</div>
          <div>=========</div>
          <div>{this.props.storeSid}</div>
          <div>{this.props.storeFirm_id}</div>
          <div>{this.props.storeStore}</div>
          <div>{this.props.storeCounty}</div>
          <div>{this.props.storeDist}</div>
          <div>{this.props.storeAddress}</div>
          <div>{this.props.storePhone}</div>
          <div>{this.props.businessHour}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default StoreInfo
