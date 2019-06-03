import React from 'react'
import '../styles/product/ProductDetail.scss'
import { Button } from 'react-bootstrap'
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
      type: '',
    }
  }
  componentDidMount() {
    var gotit = {}

    fetch('//localhost:3002/product/productlist', {})
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        this.setState({ data: jsonData })
        var sid = localStorage.getItem('item.sid')
        var data_leng = Object.keys(jsonData).length
        for (let i = 0; i < data_leng; i++) {
          if (this.state.data[i].sid == sid) {
            gotit = this.state.data[i]
            break
          }
        }
        switch (gotit.gametype_id) {
          case 0:
            this.state.type = '全部'
            break
          case 1:
            this.state.type = '紙牌遊戲'
            break
          case 1:
            this.state.type = '骰子遊戲'
            break
          case 2:
            this.state.type = '合作遊戲'
            break
          case 3:
            this.state.type = '紙牌遊戲'
            break
          case 4:
            this.state.type = '派對遊戲'
            break
          case 5:
            this.state.type = '陣營遊戲'
            break
          case 6:
            this.state.type = '猜心遊戲'
            break
          case 7:
            this.state.type = '輕策略遊戲'
            break
          case 8:
            this.state.type = '中策略遊戲'
            break
          case 9:
            this.state.type = '重策略遊戲'
            break
          case 10:
            this.state.type = '大腦遊戲'
            break
          case 11:
            this.state.type = '言語遊戲'
            break
          case 12:
            this.state.type = '巧手遊戲'
            break
          case 13:
            this.state.type = '競速遊戲'
            break
          case 14:
            this.state.type = '兒童遊戲'
            break
          case 15:
            this.state.type = '闔家遊戲'
            break
        }
        this.setState({ type: this.state.type })
        gotit.createDate = gotit.createDate.slice(0, 10)
        gotit.description = gotit.description.replace(/\s/g, '<br>')
        this.setState({ gotit: gotit })

        fetch('//localhost:3002/product/productlist2', {})
          .then(response => {
            return response.json()
          })
          .then(jsonData => {
            var local = window.location.href
            var long = local.length
            var sid_index = local.lastIndexOf('sid:')
            var sid = local.slice(sid_index + 4, long)
            // alert(sid_index + 'spice:' + sid + 'length:' + long)
            const gotdata2 = jsonData
            var data_leng = Object.keys(jsonData).length
            for (let i = 0; i < data_leng; i++) {
              if (gotdata2[i].sid == sid) {
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
      })
    fetch('//localhost:3002/product/firm', {})
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        var firmname
        console.log(jsonData)
        console.log(gotit)
        for (let i = 0; i < jsonData.length; i++) {
          if (jsonData[i].sid === gotit.seller_sid) {
            firmname = jsonData[i].firmname
            break
          }
        }
        console.log(firmname)
        this.setState({ firmname: firmname })
      })
      .catch(err => {
        console.log('錯誤:', err)
      })

    console.log(gotit)
  }
  add = () => () => {
    this.state.number++
    this.setState({ number: this.state.number })
    console.log(this.state.number)
  }

  subtract = () => () => {
    this.state.number--
    if (this.state.number == 0) {
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

    // arr 撈 LocalStorage
    if (
      localStorage.allcart === '' ||
      localStorage.allcart === undefined ||
      localStorage.allcart === null
    ) {
      var arr = []
    } else {
      var arr = JSON.parse(localStorage.allcart)
    }

    // 在allcart裡找gotit
    let index = arr.findIndex(item => item.sid === this.state.gotit.sid)
    if (index !== -1) {
      // 有找到 就更改數量
      arr[index].number += this.state.gotit.number
    } else {
      // 找不到 就新增
      arr.push(this.state.gotit)
    }

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
            <div className="mainBoard1">
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
                  <p>出售商:{this.state.firmname}</p>
                  <p>上架日期:{this.state.gotit.createDate}</p>
                  <p>分類:{this.state.type}</p>
                  <h4>
                    售價 <div className="seld">{this.state.gotit.price}</div>元
                  </h4>
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
                    onClick={this.addtoshop()}
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
