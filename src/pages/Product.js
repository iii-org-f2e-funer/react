import React from 'react'
import '../styles/product/product.scss'
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class product extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      data1: [],
      searchmoney: 180,
      oridata: [],
      game_type: [],
      type: 0,
      sort: 'hightolow',
    }
  }
  componentDidMount() {
    ///////////////////////////////////////////////////////////////////////////////
    fetch('//13.112.90.13:3002/product/productlist', {})
      //fetch prodct_manage
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        // console.log(response)
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json()
      })
      .then(jsonData => {
        this.setState({ data: jsonData })
        // typeof()
        // console.log(this.state.data)
      })
      .catch(err => {
        // console.log('錯誤:', err)
      })
    ////////////////////////////////////////////////////////////////////////////////
    fetch('//13.112.90.13:3002/product/productlist2', {})
      //fetch product_sid=sid的所有圖片path
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        // console.log(response)
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
        console.log(dt1)
        this.setState({ data: dt1 })
        this.setState({ oridata: dt1 })
      })
      .catch(err => {
        console.log('錯誤:', err)
      })
    ///////////////////////////////////////////////////////////////////////////////
    fetch('//13.112.90.13:3002/product/game_type', {})
      //fetch game_type
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        this.setState({ game_type: jsonData })
        // typeof()
        console.log(this.state.game_type)
      })
      .catch(err => {
        // console.log('錯誤:', err)
      })
  }
  gotodetail = sid => () => {
    // console.log(sid)
    // window.location.href = 'http://13.112.90.13:3000/ProductDetail/sid:' + sid
    localStorage.setItem('item.sid', sid)
  }
  search = () => () => {
    ///////////////// getstart ///////////////////
    this.setState({ data: this.state.oridata })
    // this.state.data = this.state.oridata
    ///////////////////// searchtext ///////////////////////////////
    let data = this.state.oridata
    if (this.state.searchText && this.state.searchText.trim() !== '') {
      data = this.state.data.filter(item =>
        item.productName.includes(this.state.searchText)
      )
    }
    this.setState({ data: data })
    //////////////////////// money /////////////////////////////////
    var aaa = []

    if (document.getElementById('searchmoney').value) {
      var money = document.getElementById('searchmoney').value
    } else {
      money = 180
    }
    var d1_leng = Object.keys(data).length
    for (let i = 0; i < d1_leng; i++) {
      if (data[i].price <= money) {
        aaa.push(data[i])
      }
    }
    data = aaa
    this.setState({ data: data })
    // console.log(data)
    /////////////////////// type ///////////////////////////////////
    var bbb = []
    var type_id = this.state.type
    // console.log(type_id)
    var d2_leng = Object.keys(data).length
    if (type_id == 0) {
    } else {
      for (let i = 0; i < d2_leng; i++) {
        if (data[i].gametype_id == type_id) {
          bbb.push(data[i])
        }
      }
      data = bbb
      this.setState({ data: data })
    }
    /////////////////////// sort ///////////////////////////////
    var sort_style = this.state.sort
    if (sort_style === 'hightolow') {
      //物件排序方法
      data.sort(function(a, b) {
        return b.price - a.price
      })
    } else {
      data.sort(function(a, b) {
        return a.price - b.price
      })
    }
    this.setState({ data: data })
    ////////////////////////////////////////////////////////////////
  }
  range = () => () => {
    var money = document.getElementById('searchmoney').value
    this.setState({ searchmoney: money })
    // console.log(uuu)
  }
  gettype = event => {
    // console.log(event.target.value)
    // console.log(event.target.value)
    this.setState({ type: event.target.value })
  }

  handleSearchTextChange = event => {
    // console.log(event.target.value)
    this.setState({ searchText: event.target.value })
  }

  getsort = event => {
    // console.log(event.target.value)
    // console.log(event.target.value)
    this.setState({ sort: event.target.value })
  }
  render() {
    return (
      <>
        <div className="product">
          <div className="banner">
            <h2 className="banner-tittle">桌遊，知性與深度的休閒生活方式</h2>
            <img
              id="purplemonster"
              src={process.env.PUBLIC_URL + '/images/product/redmonster1.png'}
            />
          </div>
          <div className="product_container">
            <div className="outside">
              <div className="search">
                <InputGroup
                  className="inputsaerch
                "
                >
                  <FormControl
                    name="searchText"
                    placeholder="輸入商品名稱"
                    value={this.state.searchText}
                    onChange={this.handleSearchTextChange}
                  />
                </InputGroup>
                <div className="game-control">
                  <label className="">遊戲分類</label>
                  <select
                    className="p-1 drop-control"
                    onChange={this.gettype}
                    value={this.state.type}
                  >
                    {this.state.game_type.map((item, index, array) => (
                      <option className="dropdown" value={item.type_id}>
                        {item.type_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="game-control">
                  <label className="">價格</label>
                  <select
                    className="drop-control p-1"
                    onChange={this.getsort}
                    value={this.state.sort}
                  >
                    <option className="dropdown" value="hightolow">
                      價格:高到低
                    </option>
                    <option className="dropdown" value="lowtohigh">
                      價格:低到高
                    </option>
                  </select>
                </div>
                <div className="game-control">
                  <label className="">價格設定</label>
                  <div className="" id="rangeshow">
                    {this.state.searchmoney}
                    以下
                  </div>
                  <div className="range-controll">
                    <input
                      type="range"
                      name="money"
                      min="180"
                      max="3000"
                      id="searchmoney"
                      onChange={this.range()}
                    />
                  </div>
                </div>
                <Button
                  className="searchit m-4  button"
                  block
                  onClick={this.search()}
                >
                  篩選商品
                </Button>
              </div>
              <div className="cards">
                {this.state.data.map(item => (
                  <Link to={'ProductDetail/sid:' + item.sid}>
                    <div
                      className="gamecard"
                      key={item.id}
                      onClick={this.gotodetail(item.sid)}
                    >
                      <Card
                        style={{ width: '200px', height: '320px' }}
                        className="allcard"
                      >
                        <Card.Img
                          variant="top"
                          src={
                            '//13.112.90.13:3002/images/product/' +
                            item.image_path
                          }
                        />
                        <div>
                          <div className="card-priceall ">
                            <div className="p-1 card-price">
                              <div className="mb-2 productname">
                                {item.productName}
                              </div>
                              <h4>${item.price}</h4>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="scrolltop" />
        </div>
      </>
    )
  }
}
