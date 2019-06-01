import React from 'react'
import '../styles/cart/cart.scss'
import { Button, Table, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Account from '../components/firm/Account'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IoMdCart } from 'react-icons/io'

class Mycart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      choosetotal: 0,
      total: 0,
      allcart: [],
      method_money: 60,
      method_funshop: 'toshop',
      login: '',
      input1: 0,
      input2: 0,
      input3: 0,
      choose: [],
      zzz: [],
    }
  }

  componentDidMount() {
    this.refreshCart()
  }
  refreshCart = () => {
    fetch('//localhost:3002/product/firm')
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        this.setState({ firm: jsonData })
        if (localStorage.allcart) {
          const allcart = JSON.parse(localStorage.allcart)

          var products = []
          for (let i = 0; i < allcart.length; i++) {
            var product = {
              product_sid: 0,
              productName: '',
              number: 0,
              product_price: 0,
              total: 0,
              seller: 0,
            }
            product.productName = allcart[i].productName
            product.product_sid = allcart[i].sid
            product.product_price = allcart[i].price
            product.number = allcart[i].number
            product.total = allcart[i].price * allcart[i].number
            product.seller = allcart[i].seller_sid
            products.push(product)
          }

          // 開始分組
          var xxx = {} //全部資料 {"店家ID":商品[],"店家ID":商品[],"店家ID":商品[]}
          for (let i = 0; i < products.length; i++) {
            if (xxx[products[i].seller] !== undefined) {
              xxx[products[i].seller].push(products[i])
            } else {
              xxx[products[i].seller] = []
              xxx[products[i].seller].push(products[i])
            }
          }
          // xxx  全部資料 {"店家ID":商品[],"店家ID":商品[],"店家ID":商品[]}
          // zzz  [{ seller_id:1,products:[] },{ seller_id:2,products:[] }]
          var zzz = []
          for (let k in xxx) {
            let index = this.state.firm.findIndex(item => item.sid === +k)
            if (index !== -1) {
              var obj = {
                seller_id: k,
                seller: this.state.firm[index].firmname,
                products: xxx[k],
              }
              zzz.push(obj)
            } else {
              var obj = {
                seller_id: k,
                seller: '',
                products: xxx[k],
              }
              zzz.push(obj)
            }
          }
          // console.log(xxx)
          // console.log(zzz)
          this.setState({ zzz: zzz })
        }
      })
      .catch(err => console.log(err))
  }

  // here
  deleteit = product_sid => () => {
    var arr = JSON.parse(localStorage.allcart)
    var new_arr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].sid !== product_sid) {
        new_arr.push(arr[i])
      }
    }
    localStorage.setItem('allcart', JSON.stringify(new_arr))
    this.refreshCart()
  }

  goto = sid => () => {
    localStorage.setItem('item.sid', sid)
    window.location.href = 'http://localhost:3000/ProductDetail/sid:' + sid
  }

  check1 = ind => () => {
    var chooseseller = this.state.zzz[ind].products
    console.log(chooseseller)
    var choosetotal = 0
    for (let i = 0; i < chooseseller.length; i++) {
      choosetotal += chooseseller[i].total
    }
    console.log(choosetotal)
    this.setState({ choosetotal: choosetotal })
    this.setState({ choose: this.state.zzz[ind].products })
  }

  paymethod = event => {
    var method = event.target.value
    console.log(event.target.value)
    if (method === 'tohome') {
      var sss = 130
      this.setState({ method_money: 130 })
    } else if (method === 'toshop') {
      sss = 60
      this.setState({ method_money: 60 })
    }

    this.setState({
      method_funshop: method,
    })
  }
  gotocheck = () => {
    if (this.props.userInfo.login) {
      if (this.state.choose.length) {
        console.log(this.state.choose)
        localStorage.setItem('method_funshop', this.state.method_funshop)
        localStorage.setItem(
          'funapptotal',
          this.state.choosetotal + this.state.method_money
        )
        var aaa = JSON.stringify(this.state.choose)
        localStorage.setItem('choose_order', aaa)
        console.log(this.props.userInfo.login)
        window.location.href = 'http://localhost:3000/Shopping1'
      } else {
        alert('please choose')
      }
    } else {
      alert('please login')
    }
  }
  clear = () => {
    localStorage.removeItem('allcart')
    window.location.href = 'http://localhost:3000/Mycart'
  }
  add = () => {}
  render() {
    if (this.state.zzz.length === 0) {
      return (
        <>
          <div className="cart">
            <div className="container">
              <div className="myfav0-table">
                <div className="cart-img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/product/cart.png'}
                    width="300px"
                  />
                  <div className="words">購物車是空的喔</div>
                </div>
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
              <div className="cart-title d-flex">
                <div className="title h21">
                  <h2>我的購物車</h2>
                </div>
                <div className="ml-4 title clear1">
                  <button
                    className="button button-white clear"
                    onClick={this.clear}
                  >
                    clear Mycart
                  </button>
                </div>
              </div>
              {/* ////////////////////////////////////////////////////////////data1//////////////////////////////////////////////// */}

              {this.state.zzz.map((item, index) => (
                <div className="myfav-table mb-5">
                  <label class="container1">
                    {item.seller}
                    <input
                      type="radio"
                      name="rr"
                      onClick={this.check1(index)}
                    />
                    <span class="checkmark" />
                  </label>
                  <Table striped bordered hover>
                    <thead className="table_head">
                      <tr>
                        <th />
                        <th>商品名稱</th>
                        <th>單價</th>
                        <th>數量</th>
                        <th>小計</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.products.map((item, index, array) => (
                        <tr key={item.product_sid}>
                          <td>{index + 1}</td>
                          <td className="name">{item.productName}</td>
                          <td>{item.product_price}</td>
                          <td className="">
                            {/* <i class="fas fa-plus" /> */}
                            <div className="numbers">{item.number}</div>
                            {/* <i class="fas fa-minus" /> */}
                          </td>
                          <td>{item.total}</td>
                          <td className="todo">
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.deleteit(item.product_sid)}
                            >
                              刪除
                            </button>
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.goto(item.product_sid)}
                            >
                              詳細資料
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ))}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* footer */}
              <div className="check mt-5">
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
                    <h5>{this.state.choosetotal}</h5>
                  </div>
                  <div className="paymethod money">
                    <h5>取貨方式</h5>
                    <select className="GET-control" onChange={this.paymethod}>
                      <option className="dropdown" value="toshop">
                        超商取貨
                      </option>
                      <option className="dropdown" value="tohome">
                        宅配到府
                      </option>
                    </select>
                  </div>
                  <div className="money">
                    <h5>運費</h5>
                    <h5>{this.state.method_money}</h5>
                  </div>
                  <div className="money">
                    <h5>訂單金額總計</h5>
                    <h3 className="total">
                      {this.state.choosetotal + this.state.method_money}
                    </h3>
                  </div>
                  <div className="checkbutton">
                    <div className="">
                      <Link to="/product">
                        <button
                          className=" button
                        checkbutton1"
                        >
                          繼續購物
                        </button>
                      </Link>
                    </div>
                    <div className="">
                      <button
                        className="button checkbutton2"
                        onClick={this.gotocheck}
                      >
                        前往結帳
                      </button>
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
function mapStateToProp(store) {
  return {
    userInfo: store.userInfo,
  }
}

export default withRouter(
  connect(
    mapStateToProp,
    {
      userInfoAction: actions.userInfo,
    }
  )(Mycart)
)
