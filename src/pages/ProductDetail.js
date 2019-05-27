import React from 'react'
import '../styles/product/ProductDetail.scss'
// import { Button } from 'react-bootstrap'
import Maylike from '../components/product/Maylike'
import ImageGallery from 'react-image-gallery'
class ProductDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      gotit: {},
      images: [],
      number: 1,
      allcart: [],
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/product/productlist', {})
      //fetch prodct_manage
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        // console.log(response)
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json()
      })
      .then(jsonData => {
        this.setState({ data: jsonData })
        var sid = localStorage.getItem('item.sid')
        var data_leng = Object.keys(jsonData).length
        for (let i = 0; i < data_leng; i++) {
          if (this.state.data[i].sid === sid) {
            var gotit = this.state.data[i]
            break
          }
        }
        this.setState({ gotit: gotit })
        // console.log(gotit)
      })
      .catch(err => {
        console.log('錯誤:', err)
      })

    fetch('//localhost:3002/product/productlist2', {})
      //fetch prodct_images
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        // console.log(response)
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json()
      })
      .then(jsonData => {
        // this.setState({ data: jsonData })
        //抓localStorage.sid
        // var sid = localStorage.getItem('item.sid')
        var local = window.location.href
        var long = local.length
        var sid_index = local.lastIndexOf('sid:')
        var sid = local.slice(sid_index + 4, long)
        // alert(sid_index + 'spice:' + sid + 'length:' + long)
        const gotdata2 = jsonData
        var data_leng = Object.keys(jsonData).length
        for (let i = 0; i < data_leng; i++) {
          if (gotdata2[i].sid === sid) {
            var a1 =
              'http://192.168.27.25/happy6/product_manage/' +
              gotdata2[i].image_path
            var image = {
              original: a1,
              thumbnail: a1,
            }
            this.state.images.push(image)
          }
        }
        this.setState({ images: this.state.images })
        // console.log(this.state.images)
      })
      .catch(err => {
        console.log('錯誤:', err)
      })
  }
  add = () => () => {
    this.state.number++
    this.setState({ number: this.state.number })
    console.log(this.state.number)
  }

  subtract = () => () => {
    this.state.number--
    if (this.state.number === 0) {
      this.state.number = 1
    }
    this.setState({ number: this.state.number })
    console.log(this.state.number)
  }
  addtoshop = () => () => {
    alert('成功加入購物車')
    var product_num = this.state.number
    this.state.gotit.number = product_num
    console.log(this.state.gotit)
    var arr = []
    if (localStorage.allcart) {
      arr = JSON.parse(localStorage.allcart)
    }
    arr.push(this.state.gotit)
    localStorage.setItem('allcart', JSON.stringify(arr))
    this.setState({ allcart: arr })
    // console.log(this.state.allcart)
    // const aaa = JSON.stringify(this.state.allcart)
  }
  render() {
    return (
      <>
        <div className="ProductDetail">
          <div className="container">
            <div className="mainBoard">
              <div className="flex">
                <div className="imgCard">
                  <ImageGallery
                    showFullscreenButton={false}
                    items={this.state.images}
                    showPlayButton={false}
                  />
                </div>
                <div className="detailCard">
                  <h3>{this.state.gotit.productName}</h3>
                  <p>出售商:{this.state.gotit.seller_sid}</p>
                  <p>上架日期:{this.state.gotit.createDate}</p>
                  <p>分類 紙牌遊戲 ,輕策略遊戲</p>
                  <p>
                    售價 <div className="seld">{this.state.gotit.price}</div>元
                  </p>
                  <div className="addandsubtract">
                    <div className="add button" onClick={this.add()}>
                      <i className="fas fa-plus" />
                    </div>
                    <div className="product-many">{this.state.number}</div>
                    <div className="subtract button" onClick={this.subtract()}>
                      -
                    </div>
                  </div>
                  <div
                    className="actionButton1  button"
                    size="lg"
                    onClick={this.addtoshop()}
                    block
                  >
                    加入購物車
                  </div>
                </div>
              </div>
              <div className="product-Description-title">產品說明</div>
              <div
                className="product-Description-contact"
                dangerouslySetInnerHTML={{
                  __html: this.state.gotit.description,
                  //<br/> change line
                }}
              />
            </div>
            <div className="maylike">
              <div className="maylike-title">
                {' '}
                <div className="mayliketitle-img" />
                <h4>你可能有興趣</h4>
              </div>
              <div className="maylike-images">
                <Maylike />
              </div>
            </div>
          </div>{' '}
          <div className="scrolltop" />
        </div>
      </>
    )
  }
}

export default ProductDetail
