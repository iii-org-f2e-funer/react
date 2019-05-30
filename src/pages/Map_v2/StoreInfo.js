import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './map.scss'
import { FaMapMarkerAlt, FaPhone, FaClock, FaTags } from 'react-icons/fa'
import {
  ListGroup,
  Input,
  Button,
  Label,
  Tooltip,
  Media,
  Card,
} from 'react-bootstrap'
import * as fa from 'react-icons/fa'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import '../../styles/gameMap/gameMap.scss'

class StoreInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  DisplayInfo = () => {
    return (
      <div className="storeInfo">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <img
              src={
                'http://192.168.27.25/happy6/site' + this.props.imageArray[0]
              }
              style={{ width: '200px' }}
            />
            {console.log(this.props)}
          </ListGroup.Item>
          <ListGroup.Item>
            {/* <div>{this.props.storeSid}</div>
            <div>{this.props.storeFirm_id}</div> */}
            <div>
              <i
                className="fas fa-store fa-2x fa-fw"
                style={{ verticalAlign: 'middle', color: 'gray' }}
              />
              <span style={{ display: 'inline-block', width: '10px' }} />
              {this.props.storeStore}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <i
                className="fas fa-location-arrow fa-2x fa-fw"
                style={{ verticalAlign: 'middle', color: 'gray' }}
              />
              <span style={{ display: 'inline-block', width: '10px' }} />
              {this.props.storeCounty}
              {this.props.storeDist}
              {this.props.storeAddress}
            </div>
            <div>
              <i
                className="fas fa-phone fa-2x fa-fw"
                style={{ verticalAlign: 'middle', color: 'gray' }}
              />
              <span style={{ display: 'inline-block', width: '10px' }} />
              {this.props.storePhone}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <i
                className="fas fa-clock fa-2x fa-fw"
                style={{ verticalAlign: 'middle', color: 'gray' }}
              />
              <span style={{ display: 'inline-block', width: '10px' }} />
              {this.props.businessHour}
            </div>
            <div>
              <i
                className="fas fa-bed fa-2x fa-fw"
                style={{ verticalAlign: 'middle', color: 'gray' }}
              />
              <span style={{ display: 'inline-block', width: '10px' }} />
              {this.props.publicHoliday}
            </div>
          </ListGroup.Item>
          <NavLink to={{ pathname: `/gamemapDetail/${this.props.storeSid}` }}>
            <Button className="actionButton " size="lg" block>
              場地詳細資訊
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

  CardInfo = () => {
    if (!this.props.dataStore[0].imageArray) {
      return ''
    } else {
      return (
        <div className="cardInfo">
          {this.props.dataStore.map((item, idx, array) => (
            <Card style={{ width: '95%' }}>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={`http://192.168.27.25/happy6/site${
                    this.props.dataStore[idx].imageArray[0]
                  }`}
                  alt=""
                />
                <Media.Body>
                  <p>{this.props.dataStore[idx].store}</p>
                  <p>
                    {this.props.dataStore[idx].county}
                    {this.props.dataStore[idx].dist}
                    {this.props.dataStore[idx].storeAddress}
                  </p>
                  <p> {this.props.dataStore[idx].storePhone}</p>
                </Media.Body>
              </Media>
            </Card>
          ))}
        </div>
      )
    }
  }

  render() {
    if (!this.props.dataStore[0]) {
      return <h2>正在下載地圖資料...</h2>
    } else {
      return (
        <React.Fragment>
          {console.log(this.props.dataStore)}
          {this.props.storeStore ? this.DisplayInfo() : this.CardInfo()}
          {/* <NavLink to={{ pathname: `/games/game/${game.ID}` }}> */}
          {}
        </React.Fragment>
      )
    }
  }
}

export default StoreInfo
