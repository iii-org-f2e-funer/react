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
  ButtonGroup,
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
      <div className="cardList">
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src={
              'http://13.112.90.13:3002/images/firm/' + this.props.imageArray[0]
            }
            style={{
              minHeight: '230px',
              maxHeight: '300px',
              objectFit: 'contain',
            }}
          />
          <Card.Body>
            <Card.Title>
              <h4>{this.props.storeStore}</h4>
            </Card.Title>
            <Card.Text>
              <p>
                <i
                  className="fas fa-location-arrow  fa-fw"
                  style={{ verticalAlign: 'middle', color: 'gray' }}
                />
                {this.props.storeCounty} {this.props.storeDist}
                {this.props.storeAddress}
              </p>

              <p>
                <i
                  className="fas fa-phone  fa-fw"
                  style={{ verticalAlign: 'middle', color: 'gray' }}
                />
                {this.props.storePhone}
              </p>

              <p>
                <i
                  className="fas fa-clock  fa-fw"
                  style={{ verticalAlign: 'middle', color: 'gray' }}
                />
                {this.props.businessHour}
              </p>

              <p>
                <i
                  className="fas fa-bed  fa-fw"
                  style={{ verticalAlign: 'middle', color: 'gray' }}
                />
                {this.props.publicHoliday}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="middle">
          <Link to={{ pathname: `/gamemapDetail/${this.props.storeSid}` }}>
            <button className="button button--lg middle" size="lg" block>
              場地詳細資訊
            </button>
          </Link>
        </div>
      </div>
    )
  }

  CardInfo = () => {
    // console.log(this.props.dataStore)

    if (!this.props.dataStore.length) {
      return ''
    } else {
      return (
        <div className="cardInfo">
          {this.props.dataStore.map((item, idx, array) => (
            <Card
              style={{ width: '95%' }}
              bsPrefix="content"
              onClick={() => this.props.getSearch(item.store)}
            >
              <Media>
                <img
                  width={64}
                  height={64}
                  className="m-3"
                  src={`http://13.112.90.13:3002/images/firm/${
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
          <div className="middle">
            <button
              className="button button--lg middle button-white"
              size="lg"
              block
              onClick={this.props.clearSearch}
            >
              清除篩選
            </button>
          </div>
        </div>
      )
    }
  }

  ClearButton = () => {
    return (
      <div className="middle">
        <button
          className="button button--lg middle button-white"
          size="lg"
          block
          onClick={this.props.clearSearch}
        >
          清除篩選
        </button>
      </div>
    )
  }

  render() {
    if (!this.props.dataStore[0]) {
      return <h2>正在下載地圖資料...</h2>
    } else {
      return (
        <React.Fragment>
          {/* {console.log(this.props.dataStore)} */}
          {this.props.storeStore ? this.DisplayInfo() : this.CardInfo()}
          {/* <NavLink to={{ pathname: `/games/game/${game.ID}` }}> */}
          {this.props.storeStore ? this.ClearButton() : ''}
        </React.Fragment>
      )
    }
  }
}

export default StoreInfo
