import React from 'react'
import '../styles/gameMap/gameMap.scss'
import { Button, Tabs, Tab, Modal, ButtonToolbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Slider from '../components/gameMap/ImgSlider'
import * as fa from 'react-icons/fa'

import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
    }
    this.handleChange = this.handleChange.bind(this)
    this.isWeekday = this.isWeekday.bind(this)
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }
  isWeekday = date => {
    console.log(date.getDay())

    return !(date.getDay() === 0 || date.getDay() === 5)
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.headertitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex" />
          <div>
            <form>
              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>姓名</label>
              </div>

              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>手機</label>
              </div>
            </form>
            <div className="numberSpinner">
              <label className="label" htmlFor="number1" />
              <div className="number">
                <button className="number__btn number__btn--down" />
                <input
                  className="number__field"
                  type="number"
                  id="number1"
                  min="1"
                  max="9"
                  step="1"
                  value="2"
                />
                <button className="number__btn number__btn--up" />
              </div>
            </div>
          </div>
          <div>
            <DatePicker
              inline
              selected={this.state.startDate}
              onChange={this.handleChange}
              filterDate={this.isWeekday}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
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
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:3002/gameMap/sid/' + this.props.match.params.id)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataStore: data[0] })
        return this.state
      })
      .then(state => console.log())
      .catch(err => console.log(err))
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false })

    return (
      <React.Fragment>
        <div className="bodyroot">
          <div className="container">
            <div className="mainBoard">
              <div className="flex">
                <div className="imgCard">
                  <ImageGallery
                    items={images}
                    showPlayButton={false}
                    autoPlay={true}
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
                  <Button
                    className="actionButton "
                    size="lg"
                    block
                    onClick={() => this.setState({ modalShow: true })}
                  >
                    預約場地
                  </Button>
                </div>
              </div>

              <div className="subBoard">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
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

              <ButtonToolbar>
                <Button
                  variant="primary"
                  onClick={() => this.setState({ modalShow: true })}
                >
                  Launch vertically centered modal
                </Button>

                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                  headertitle={this.state.dataStore.store}
                />
              </ButtonToolbar>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GameMapDetail
