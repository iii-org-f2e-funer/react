import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './map.scss'
import { FaMapMarkerAlt, FaPhone, FaClock, FaTags } from 'react-icons/fa'
import { ListGroup } from 'react-bootstrap'
import * as fa from 'react-icons/fa'

class StoreInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  DisplayInfo = () => {
    return (
      <div className="storeInfo">
        <ListGroup variant="flush">
          <ListGroup.Item>This is image</ListGroup.Item>
          <ListGroup.Item>
            {/* <div>{this.props.storeSid}</div>
            <div>{this.props.storeFirm_id}</div> */}
            <div>
              <fa.FaShoppingBag />
              {this.props.storeStore}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <fa.FaMapMarkedAlt />
              {this.props.storeCounty}
              {this.props.storeDist}
              {this.props.storeAddress}
            </div>
            <div>
              <fa.FaPhone />
              {this.props.storePhone}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <fa.FaRegClock />
              {this.props.businessHour}
            </div>
            <div>公休時間 :{this.props.publicHoliday}</div>
          </ListGroup.Item>
        </ListGroup>
        {/* <div>=========</div> */}
        {/* <div>{this.props.storeLogoUrl}</div> */}
        {/* <div>{this.props.storeName}</div> */}
        {/* <div>{this.props.storeAdd}</div>
        <div>{this.props.storeTel}</div>
        <div>{this.props.storeHourWeekday}</div> */}
      </div>
    )
  }
  render() {
    return (
      <React.Fragment>
        {this.props.storeStore ? this.DisplayInfo() : ''}
      </React.Fragment>
    )
  }
}

export default StoreInfo
