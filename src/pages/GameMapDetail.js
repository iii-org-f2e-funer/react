import React from 'react'
import '../styles/gameMap/gameMapDetail.scss'
import {
  Button,
  Tabs,
  Tab,
  Modal,
  ButtonToolbar,
  Row,
  Col,
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom'
import Slider from '../components/gameMap/ImgSlider'
import * as fa from 'react-icons/fa'

import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import DatePicker, { registerLocale } from 'react-datepicker'
import zhCN from 'date-fns/locale/zh-CN'

import 'react-datepicker/dist/react-datepicker.css'
registerLocale('zh_cn', zhCN)

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      startPeo: 1,
      startName: '',
      startPhone: '',
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.isWeekday = this.isWeekday.bind(this)
    this.calcDays = this.calcDays.bind(this)
    this.handlePeoChange = this.handlePeoChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleDateChange(date) {
    this.setState({
      startDate: date,
    })
  }
  handlePeoChange(modifyValue) {
    if (this.state.startPeo + modifyValue === 0) {
      return
    }
    this.setState({ startPeo: this.state.startPeo + modifyValue })
  }

  handleNameChange(evt) {
    this.setState({ startName: evt.target.value })
  }

  handlePhoneChange(evt) {
    this.setState({ startPhone: evt.target.value })
  }
  handleSubmit(event) {
    console.log(this.props)
    event.preventDefault()
    fetch('http://127.0.0.1:3002/gameMap/reservation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({
        name: this.state.startName,
        phone: this.state.startPhone,
        people: this.state.startPeo,
        date: this.state.startDate,
        firm_id: this.props.datastore.firm_id,
        store: this.props.datastore.store,
      }),
    })
      .then(() => {
        this.setState({
          startDate: new Date(),
          startPeo: 1,
          startName: '',
          startPhone: '',
        })
        return 1
      })
      .then(() => {
        this.props.onHide()
        window.location.href = '/gameMap'
        return 1
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  isWeekday = date => {
    if (this.props.public_holiday == null) {
      return 1
    }
    let holidayArray = this.props.public_holiday.split(',')
    // ["星期二", "星期三", "星期四", "星期五", "星期六"]
    let resultArray = []

    let checkDaysSample = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ]
    for (let index in holidayArray) {
      resultArray.push('' + checkDaysSample.indexOf(holidayArray[index]))
    }
    let dd = resultArray.indexOf('' + date.getDay())
    if (dd === -1) {
      return 1
    } else {
      return 0
    }
  }

  calcDays = (date, days) => {
    return date.getTime() + days * 24 * 60 * 60 * 1000
  }

  render() {
    console.log(this.props)
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="mtl-design"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.headertitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <form>
                <div className="group">
                  <input
                    type="text"
                    required
                    value={this.state.startName}
                    onChange={this.handleNameChange}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>姓名</label>
                </div>

                <div className="group">
                  <input
                    type="number"
                    required
                    value={this.state.startPhone}
                    onChange={this.handlePhoneChange}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>手機(0912456456)</label>
                </div>
              </form>
              <div className="numberSpinner">
                <p>人數</p>
                <label className="label" htmlFor="number1" />
                <div className="number">
                  <button
                    className="number__btn number__btn--down"
                    onClick={() => this.handlePeoChange(-1)}
                  />
                  <input
                    className="number__field"
                    type="number"
                    id="number1"
                    min="1"
                    max="30"
                    step="1"
                    value={this.state.startPeo}
                    readOnly
                  />
                  <button
                    className="number__btn number__btn--up"
                    onClick={() => this.handlePeoChange(1)}
                  />
                </div>
              </div>
            </Col>

            <Col style={{ width: '240px' }}>
              <DatePicker
                inline
                selected={this.state.startDate}
                onChange={this.handleDateChange}
                filterDate={this.isWeekday}
                locale="zh_cn"
                minDate={this.calcDays(new Date(), 1)}
                maxDate={this.calcDays(new Date(), 90)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                timeCaption="時間"
              />
              <div style={{ color: 'orange' }}>
                可預約日期:明天 至 90天前
                <br />
                {this.props.public_holiday == null
                  ? ''
                  : '排除 店家公休日/' + this.props.public_holiday}
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'center' }}>
          <Row>
            <Col>
              <button
                className="button"
                onClick={this.handleSubmit}
                style={{ width: '100px' }}
              >
                確認預約
              </button>
            </Col>
            <Col>
              <button
                className="button button-white"
                onClick={this.props.onHide}
                style={{ width: '100px' }}
              >
                {' '}
                取消
              </button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    )
  }
}
const images = [
  {
    original: 'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
    thumbnail:
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
  },
  {
    original: 'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
    thumbnail:
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
  },
  {
    original: 'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
    thumbnail:
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
  },
]

class GameMapDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataStore: [],
      modalShow: false,
      image: [],
    }
  }

  goBack = () => {
    this.props.history.push('/gameMap')
  }
  componentDidMount() {
    fetch('http://127.0.0.1:3002/gameMap/sid/' + this.props.match.params.id)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataStore: data[0] })
        return this.state
      })
      .then(state => {
        let newImageArray = []
        for (let index in this.state.dataStore.imageArray) {
          let imgString =
            'http://192.168.27.25/happy6/site' +
            this.state.dataStore.imageArray[index]
          let imgObj = {
            original: imgString,
            thumbnail: imgString,
          }
          newImageArray.push(imgObj)
        }
        this.setState({ images: newImageArray })

        console.log(this.state)
      })
      // .catch(err => console.log(err))
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })
    {
      console.log(this.state)
    }

    return (
      <React.Fragment>
        <div className="bodyroot">
          <div className="container">
            <div className="mainBoard">
              <div className="flex">
                <div className="imgCard">
                  <ImageGallery
                    items={this.state.images}
                    showPlayButton={false}
                    autoPlay={true}
                    showFullscreenButton={false}
                    showIndex={true}
                  />
                </div>

                <div className="detailCard">
                  <h2 className="shoptitle">{this.state.dataStore.store}</h2>
                  <p>
                    <fa.FaMapMarkerAlt />
                    &nbsp;&nbsp;
                    <span>
                      {this.state.dataStore.county}
                      {this.state.dataStore.dist}
                      {this.state.dataStore.address}
                    </span>
                    <br />
                    <fa.FaPhone />
                    &nbsp;&nbsp;
                    <span>{this.state.dataStore.phone}</span>
                    <br />
                    <fa.FaRegClock />
                    &nbsp;&nbsp;
                    <span>{this.state.dataStore.business_hours}</span>
                    <br />
                    <fa.FaRegMoneyBillAlt />
                    &nbsp;&nbsp;
                    <span>{this.state.dataStore.rule}</span>
                  </p>
                  <button
                    className="button button--lg"
                    block
                    onClick={() => this.setState({ modalShow: true })}
                  >
                    預約場地
                  </button>
                </div>
              </div>

              <div className="subBoard">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="關於我們">
                    <br />
                    {this.state.dataStore.about}
                  </Tab>
                  <Tab eventKey="profile" title="場地規範">
                    <br />
                    {this.state.dataStore.charges}
                  </Tab>
                  <Tab eventKey="contact" title="評價">
                    <br />
                    很棒~~~~~
                  </Tab>
                </Tabs>
              </div>
            </div>
            {/* main board */}
            <div className="recBoard">
              <h3 className="lgfont">附近店家</h3>
              <hr />

              <div className="">
                <Slider />
              </div>

              <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={modalClose}
                headertitle={this.state.dataStore.store}
                public_holiday={this.state.dataStore.public_holiday}
                goBack={this.goBack}
                datastore={this.state.dataStore}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(GameMapDetail)
