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
        // typeof()
        // console.log(this.state.data)
      })
      .catch(err => {
        console.log('錯誤:', err)
      })

    fetch('//localhost:3002/product/productlist2', {})
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
        console.log(dt1)
        this.setState({ data: dt1 })
      })
      .catch(err => {
        console.log('錯誤:', err)
      })
  }

  clickaaa = sid => () => {
    console.log(sid)
    window.location.href = 'http://localhost:3000/ProductDetail/sid:' + sid
    localStorage.setItem('item.sid', sid)
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
                <div className="search-control">
                  <InputGroup className="mt-5 ml-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">
                        <i className="fa fa-search" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                </div>
                <label className="mt-4 ml-4">遊戲分類</label>
                <div className="game-control ml-4 mr-4 mt-1 ">
                  <DropdownButton id="dropdown-basic-button" title="全部">
                    <Dropdown.Item className="dropdown" href="#/action-1">
                      遊戲1
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown" href="#/action-2">
                      遊戲2
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown" href="#/action-3">
                      遊戲3
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
                <label className="mt-4 ml-4">品牌</label>
                <div className="game-control ml-4 mr-4 mt-1 ">
                  <DropdownButton id="dropdown-basic-button" title="全部">
                    <Dropdown.Item className="dropdown" href="#/action-1">
                      品1
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown" href="#/action-2">
                      品2
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown" href="#/action-3">
                      品3
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
                <label className="mt-4 ml-4">價格</label>
                <div className="mt-1 ml-4">1000以下</div>
                <div className="range-controll">
                  <input type="range" name="money" min="0" max="10000" />
                </div>
                <Button className="searchit m-4  button" block>
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
                        <Card.Text>
                          NT{item.price}
                          sid:{item.sid}
                        </Card.Text>
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
