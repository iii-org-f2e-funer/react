import React from 'react'
// https://codepen.io/DZuz14/pen/XxKLVY?editors=0010
// Check out my free youtube video on how to build a thumbnail gallery in react
// https://www.youtube.com/watch?v=GZ4d3HEn9zg
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
class Maylike extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      data2: {},
      images: [],
      names: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      currentIndex: 0,
      translateValue: 0,
    }
  }

  componentDidMount() {
    fetch('//13.112.90.13:3002/product/productlist', {})
      //fetch prodct_manage
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        console.log(response)
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json()
      })
      .then(jsonData => {
        this.setState({ data: jsonData })
        // typeof()
        console.log(this.state.data)
      })
      .catch(err => {
        console.log('錯誤:', err)
      })

    fetch('//13.112.90.13:3002/product/productlist2', {})
      //fetch product_sid=sid的所有圖片path
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        console.log(response)
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json()
      })
      .then(jsonData => {
        this.setState({ data1: jsonData })

        const dt1 = this.state.data
        const dt2 = jsonData
        var d1_leng = Object.keys(this.state.data).length
        var d2_leng = Object.keys(jsonData).length

        //迴圈判斷只抓其中一張圖
        for (let data1_index = d1_leng - 1; data1_index >= 0; data1_index--) {
          for (let data2_index = d2_leng - 1; data2_index >= 0; data2_index--) {
            if (dt2[data2_index].sid === dt1[data1_index].sid) {
              //將抓到的image_path存回去 this.state.data
              dt1[data1_index].image_path = dt2[data2_index].image_path
            }
          }
        }
        // console.log(dt1)
        this.setState({ data: dt1 })
        // ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        for (let i = 0; i < d1_leng; i++) {
          var tep =
            'http://192.168.27.25/happy6/product_manage' +
            this.state.data[i].image_path
          this.state.images.push(tep)
        }
        // console.log(this.state.images)
      })
      .catch(err => {
        console.log('錯誤:', err)
      })
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
  clickaaa1 = index => () => {
    console.log(index)
    window.location.href = 'http://13.112.90.13:3000/ProductDetail'
    localStorage.setItem('item.sid', index)
  }

  render() {
    const styles = {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      width: '200px',
      height: '300px',
      margin: '10px',
    }
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {/* ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
          {this.state.images.map((item, index, array) => (
            <div
              className="slide "
              style={styles}
              onClick={this.clickaaa1(index)}
            >
              <div className="gamecard">
                <Card style={{ width: '200px', height: '500px' }}>
                  <Card.Img
                    variant="top"
                    width="184px"
                    height="184px"
                    src={`${item}`}
                  />
                  <Card.Body>
                    <div className="maymoney">
                      <Card.Title>NT 790</Card.Title>
                    </div>
                    <Card.Text />
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    )
  }
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
