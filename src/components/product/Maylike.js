import React from 'react'
// https://codepen.io/DZuz14/pen/XxKLVY?editors=0010
// Check out my free youtube video on how to build a thumbnail gallery in react
// https://www.youtube.com/watch?v=GZ4d3HEn9zg
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
class Maylike extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        process.env.PUBLIC_URL + './images/product/game1.jpg',
        'http://192.168.27.25/happy6/%E5%9C%96%E7%89%87%E4%B8%8A%E8%88%B9%E5%8D%80/%E5%95%86%E5%93%81%E4%B8%8A%E6%9E%B6/06.jpg',
        '/images/product/game1.jpg',
        '/images/product/game2.jpg',
        '/images/product/game1.jpg',
        '/images/product/game2.jpg',
        '/images/product/game1.jpg',
        '/images/product/game2.jpg',
        '/images/product/game1.jpg',
      ],
      names: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      currentIndex: 0,
      translateValue: 0,
    }
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

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    )
  }
}
const Slide = ({ image }) => {
  const styles = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    width: '200px',
    height: '300px',
    margin: '10px',
  }
  return (
    <Link to="">
      <div className="slide" style={styles}>
        <div className="gamecard">
          <Card style={{ width: '200px', height: '500px' }}>
            <Card.Img
              variant="top"
              width="184px"
              height="184px"
              src={`${image}`}
            />
            <Card.Body>
              <Card.Title>矮人礦坑</Card.Title>
              <Card.Text>NT 790</Card.Text>
            </Card.Body>
          </Card>
        </div>
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

export default Maylike
