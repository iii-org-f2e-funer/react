import React from 'react'
import '../styles/product/product.scss'
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Button,
  Card,
} from 'react-bootstrap'

export default class product extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      data1: [],
      searchmoney: 0,
      oridata: [],
      game_type: [],
    }
  }
  componentDidMount() {
    ///////////////////////////////////////////////////////////////////////////////
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
        // typeof()
        // console.log(this.state.data)
      })
      .catch(err => {
        // console.log('錯誤:', err)
      })
    ////////////////////////////////////////////////////////////////////////////////
    fetch('//localhost:3002/product/productlist2', {})
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
    fetch('//localhost:3002/product/game_type', {})
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
  clickaaa = sid => () => {
    // console.log(sid)
    window.location.href = 'http://localhost:3000/ProductDetail/sid:' + sid
    localStorage.setItem('item.sid', sid)
  }
  search = () => () => {
    /////////////////getstart///////////////////
    this.setState({ data: this.state.oridata })
    this.state.data = this.state.oridata
    /////////////////getstart///////////////////
    /////////////////////searchtext///////////////////////////////
    let data = this.state.data
    if (this.state.searchText && this.state.searchText.trim() !== '') {
      data = this.state.data.filter(item =>
        item.productName.includes(this.state.searchText)
      )
    }
    this.setState({ data: data })

    /////////////////////searchtext///////////////////////////////
    ////////////////////////money////////////////////////////////////////////
    var aaa = []
    var money = document.getElementById('searchmoney').value
    var d1_leng = Object.keys(data).length
    for (let i = 0; i < d1_leng; i++) {
      if (data[i].price <= money) {
        aaa.push(data[i])
      }
    }
    data = aaa
    this.setState({ data: data })
    console.log(data)
    ////////////////////////money////////////////////////////////////////////
  }
  range = () => () => {
    var money = document.getElementById('searchmoney').value
    this.setState({ searchmoney: money })
    // console.log(uuu)
  }
  choose_type = () => () => {
    console.log('111')
  }
  handleSearchTextChange = event => {
    // console.log(event.target.value)
    this.setState({ searchText: event.target.value })
  }
  render() {
    return (
      <>
        <div className="product">
          <div className="banner">
            <h2 className="banner-tittle">桌遊，知性與深度的休閒生活方式</h2>
            <img
              id="purplemonster"
              src={process.env.PUBLIC_URL + '/images/product/redmonster.png'}
            />
          </div>
          <div className="container">
            <div className="outside">
              <div className="search">
                <InputGroup className="mb-3">
                  <FormControl
                    name="searchText"
                    placeholder="輸入商品名稱"
                    value={this.state.searchText}
                    onChange={this.handleSearchTextChange}
                  />
                </InputGroup>
                <label className="mt-4 ml-4">遊戲分類</label>
                <div className="game-control ml-4 mr-4 mt-1 ">
                  {/* <DropdownButton id="dropdown-basic-button" title="全部">
                    {this.state.game_type.map((item, index, array) => (
                      <Dropdown.Item className="dropdown">
                        <div className="whatkind" />
                      </Dropdown.Item>
                    ))}
                  </DropdownButton> */}
                  <select className="game-control mr-4 mt-1 ">
                    {this.state.game_type.map((item, index, array) => (
                      <option className="dropdown" value={item.type_id}>
                        {item.type_name}
                      </option>
                    ))}
                  </select>
                </div>{' '}
                <label className="mt-2 ml-4">品牌</label>
                <div className="game-control ml-4 mr-4 mt-1 ">
                  <select className="game-control mr-4 mt-1 p-4">
                    {this.state.game_type.map((item, index, array) => (
                      <option className="dropdown" value={item.type_id}>
                        {item.type_name}
                      </option>
                    ))}
                  </select>
                </div>
                <label className="mt-4 ml-4">價格</label>
                <div className="mt-1 ml-4 " id="rangeshow">
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
                  <div
                    className="gamecard"
                    key={item.id}
                    onClick={this.clickaaa(item.sid)}
                  >
                    <Card style={{ width: '190px', height: '280px' }}>
                      <Card.Img
                        variant="top"
                        src={
                          // process.env.PUBLIC_URL + '/images/product/game1.jpg'
                          'http://192.168.27.25/happy6/product_manage/' +
                          item.image_path
                        }
                      />

                      <Card.Body>
                        <Card.Title>{item.productName}</Card.Title>
                        <Card.Text>NT{item.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
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
