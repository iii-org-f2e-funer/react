import React from 'react'
import '../styles/product/ProductDetail.scss'
import { Button } from 'react-bootstrap'
import Maylike from '../components/product/Maylike'
import ImageGallery from 'react-image-gallery'
const images = [
  {
    original: '/images/product/game1.jpg',
    thumbnail: '/images/product/game1.jpg',
  },
  {
    original: '/images/product/game1.jpg',
    thumbnail: '/images/product/game1.jpg',
  },
  {
    original: '/images/product/game1.jpg',
    thumbnail: '/images/product/game1.jpg',
  },
]
class ProductDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      gotit: {},
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/product/productlist', {})
      //fetch prodct_manage
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        console.log(response)
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json()
      })
      .then(jsonData => {
        this.setState({ data: jsonData })
        var sid = localStorage.getItem('item.sid')
        var data_leng = Object.keys(jsonData).length
        for (let i = 0; i < data_leng; i++) {
          if (this.state.data[i].sid == sid) {
            var gotit = this.state.data[i]
            break
          }
        }
        this.setState({ gotit: gotit })
        console.log(gotit)
      })
      .catch(err => {
        console.log('錯誤:', err)
      })
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
                    items={images}
                    showPlayButton={false}
                  />
                </div>
                <div className="detailCard">
                  <h2>{this.state.gotit.productName}</h2>
                  <p>出售商:{this.state.gotit.seller_sid}</p>
                  <p>上架日期:{this.state.gotit.createDate}</p>
                  <p>分類 紙牌遊戲 ,輕策略遊戲</p>
                  <p>
                    售價 <div className="seld">{this.state.gotit.price}</div>元
                  </p>
                  <div className="addandsubtract">
                    <div className="add button button">
                      <i className="fas fa-plus" />
                    </div>
                    <div className="product-many">1</div>
                    <div className="subtract button ">-</div>
                  </div>
                  <Button className="actionButton1  button" size="lg" block>
                    加入購物車
                  </Button>
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
