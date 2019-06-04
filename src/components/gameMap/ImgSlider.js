import React from 'react'
// https://codepen.io/DZuz14/pen/XxKLVY?editors=0010
// Check out my free youtube video on how to build a thumbnail gallery in react
// https://www.youtube.com/watch?v=GZ4d3HEn9zg

import {
  Button,
  Tabs,
  Tab,
  Modal,
  ButtonToolbar,
  Row,
  Col,
  Card,
} from 'react-bootstrap'

import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import '../../styles/gameMap/imgSlider.scss'
class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
      ],
      currentIndex: 0,
      translateValue: 0,
      dataStore: [],
      change: 1,
    }
  }

  gopage = sid => {
    this.props.history.push(`/gamemapDetail/${sid}`)
  }

  getSearch(data) {
    // fetch(GetStore + '&lat=' + lat + '&lng=' + lng)
    console.log(data)

    fetch('http://13.112.90.13:3002/gameMap/nearby/')
      .then(res => res.json())
      .then(data => {
        console.log('AAAAAAAAA', data)
        this.setState({ dataStore: data })
        return 'ok'
      })
      .then(() => {
        return ''
      })
      // .catch(err => console.log(err))
      .catch(err => {
        throw new Error(err)
      })
  }

  componentDidMount() {
    this.getSearch('')
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1 - 6) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }))
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  changePage = () => {
    this.setState({ change: this.state.change++ })
    // this.forceUpdate()
  }

  render() {
    if (this.state.dataStore.length === 0) {
      return <p>資料讀取中..</p>
    } else {
      console.log(this.state.dataStore)
      return (
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s',
            }}
          >
            {/* {for(let idx in dataStore){

  let imgPath=dataStore[idx].imageArray[0]
  let imgSrc=data.Store[idx]



}} */}

            {this.state.dataStore.map((item, i) => (
              <Slide
                key={i}
                image={item.imageArray[0]}
                src={item.sid}
                store={item.store}
                changePage={() => {
                  this.changePage()
                }}
              />
            ))}
          </div>

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />

          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
      )
    }
  }
}

const Slide = ({ image, src, store }) => {
  const styles = {
    backgroundImage: `url(http://192.168.27.25/happy6/site/${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    width: '200px',
    height: '200px',
    margin: '10px',
  }
  return (
    <Link
      to={{ pathname: `/gamemapDetail/${src}` }}
      // onClick={() => this.props.changePage()}
    >
      <div className="slide" style={styles} src={src}>
        {' '}
        <span class="overlay">{store}</span>
      </div>
    </Link>
  )
}

const LeftArrow = props => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  )
}

const RightArrow = props => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  )
}

export default Slider
