import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './map.scss'
import { FaMapMarkerAlt, FaPhone, FaClock, FaTags } from 'react-icons/fa'
import { ListGroup, Input, Button, Label, Tooltip } from 'react-bootstrap'
import * as fa from 'react-icons/fa'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

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
              <img src="https://img.icons8.com/color/50/000000/briefcase.png" />
              {this.props.storeStore}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <img src="https://img.icons8.com/doodle/50/000000/marker.png" />
              {this.props.storeCounty}
              {this.props.storeDist}
              {this.props.storeAddress}
            </div>
            <div>
              <img src="https://img.icons8.com/dusk/50/000000/ringer-volume.png" />
              {this.props.storePhone}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <img src="https://img.icons8.com/dusk/50/000000/clock.png" />
              {this.props.businessHour}
            </div>
            <div>
              <img src="https://img.icons8.com/office/50/000000/sleeping-in-bed.png" />
              {this.props.publicHoliday}
            </div>
          </ListGroup.Item>
          <NavLink to={{ pathname: `/gamemapDetail/${this.props.storeSid}` }}>
            <Button className="actionButton " size="lg" block>
              馬上預約
            </Button>
          </NavLink>
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
        {/* <NavLink to={{ pathname: `/games/game/${game.ID}` }}> */}
      </React.Fragment>
    )
  }
}

export default StoreInfo
