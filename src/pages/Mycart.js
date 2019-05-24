import React from 'react'
import '../styles/cart/cart.scss'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Mycart extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      totall: 0,
      allcart: [],
    }
  }
  componentDidMount() {
    if (localStorage.allcart) {
      const allcart = JSON.parse(localStorage.allcart)
      this.setState({ data: allcart })
      // this.setState({ smalltotall: smalltotall })
      var d1_leng = allcart.length
      console.log(d1_leng)
      for (let i = 0; i < d1_leng; i++) {
        allcart[i].totall = allcart[i].price * allcart[i].number
        this.state.totall += allcart[i].totall
      }
      this.setState({
        data: allcart,
        totall: this.state.totall,
        allcart: allcart,
      })
    }
  }

  deleteit = index => () => {
    const allcart = []
    var ttt = 0
    // alert(JSON.stringify(this.state.data))
    var ddd = this.state.data.length
    for (let i = 0; i < ddd; i++) {
      if (i !== index) {
        allcart.push(this.state.data[i])
        ttt += this.state.data[i].totall
      }
    }
    localStorage.setItem('allcart', JSON.stringify(allcart))
    this.setState({ data: allcart, totall: ttt })

    // console.log(a1)

    //刪除後重新設定
    // this.setState({ data: newItems })
    // alert(JSON.stringify(this.state.data))
    // alert(JSON.stringify(newItems))
  }
  goto = sid => () => {
    window.location.href = 'http://localhost:3000/ProductDetail/sid:' + sid
  }
  render() {
    if (localStorage.allcart == undefined || localStorage.allcart === '[]') {
      return (
        <>
          <div className="cart">
            <div className="container">
              <ul className="cart_nav">
                <li>
                  <Link to="/Mycart">
                    <div className="mycart">購物車</div>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/Myfav" activeClassName="active">
                    <div className="myfav">我的收藏</div>
                  </Link>
                </li> */}
              </ul>
              <div className="myfav-table">
                <h1>給我快去買!!!!!!!</h1>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="cart">
            <div className="container">
              <ul className="cart_nav">
                <li>
                  <Link to="/Mycart">
                    <div className="mycart">購物車</div>
                  </Link>
                </li>
                <li>
                  <Link to="/Myfav" activeClassName="active">
                    <div className="myfav">我的收藏</div>
                  </Link>
                </li>
              </ul>
              <div className="myfav-table">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th />
                      <th>圖片</th>
                      <th>商品名稱</th>
                      <th>店家</th>
                      <th>單價</th>
                      <th>數量</th>
                      <th>小計</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((item, index, array) => (
                      <tr>
                        <td key={index}>{index + 1}</td>
                        <td />
                        <td>{this.state.data[index].productName}</td>
                        <td>{this.state.data[index].seller_sid}</td>
                        <td>{this.state.data[index].price}</td>
                        <td>{this.state.data[index].number}</td>
                        <td>{this.state.data[index].totall}</td>
                        <td>
                          <Button
                            className="m-1 button button"
                            block
                            onClick={this.deleteit(index)}
                          >
                            刪除
                          </Button>
                          <Button
                            className="m-1 button button"
                            block
                            onClick={this.goto(this.state.data[index].sid)}
                          >
                            detail
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="check">
                <div className="remind">
                  <label>提醒您</label>
                  <div>
                    選擇宅配請填寫正確收件人姓名，避免包裹無法送達
                    <br />
                    選擇超商取貨請填寫正確收件人姓名，避免無法領取
                    <br />
                  </div>
                </div>
                <div className="gotocheck">
                  <div className="money">
                    <h5>總計</h5>
                    <h5>{this.state.totall}</h5>
                  </div>
                  <div className="paymethod money">
                    <h5>付款方式</h5>
                    <h5>??</h5>
                  </div>
                  <div className="money">
                    <h5>運費</h5>
                    <h5>0</h5>
                  </div>
                  <div className="money">
                    <h5>訂單金額總計</h5>
                    <h3 className="total">{this.state.totall}</h3>
                  </div>
                  <div className="checkbutton">
                    <div className="m-4">
                      <Link to="/product">
                        <Button className="m-4 button " block>
                          繼續購物
                        </Button>
                      </Link>
                    </div>
                    <div className="m-4">
                      <Link to="/Shopping1">
                        <Button className="m-4 button" block>
                          前往結帳
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}
