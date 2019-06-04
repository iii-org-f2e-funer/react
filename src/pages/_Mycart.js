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
      total: 0,
      allcart: [],
      method_money: 60,
      method_funshop: 'toshop',
      login: '',
      data1: [],
      data2: [],
      data3: [],
      input1: 0,
      input2: 0,
      input3: 0,
      choose: [],
    }
  }

  componentDidMount() {
    fetch('//13.112.90.13:3002/product/firm', {})
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        this.setState({ firm: jsonData })
        var firm = jsonData
        // console.log(this.state.firm);
        if (localStorage.allcart) {
          const allcart = JSON.parse(localStorage.allcart)
          var d1_leng = allcart.length
          var seller = []
          var ggg = []
          var index = 0
          for (let i = 0; i < d1_leng; i++) {
            var seller_tep = {
              product_sid: 0,
              productName: '',
              number: 0,
              product_price: 0,
              total: 0,
              seller: 0,
            }
            seller_tep.productName = allcart[i].productName
            seller_tep.product_sid = allcart[i].sid
            seller_tep.product_price = allcart[i].price
            seller_tep.number = allcart[i].number
            seller_tep.total = allcart[i].price * allcart[i].number
            seller_tep.seller = allcart[i].seller_sid
            seller.push(seller_tep)
          }

          var aaa = []
          for (let i = 0; i < seller.length; i++) {
            aaa.push(seller[i].seller)
          }

          var result = aaa.filter(function(element, index, arr) {
            return arr.indexOf(element) === index
          })

          var sss = result.length
          var mmm = []
          var obj = {}
          for (let i = 0; i < sss; i++) {
            mmm = []
            for (let j = 0; j < seller.length; j++) {
              if (result[i] == seller[j].seller) {
                mmm.push(seller[j])
              }
            }

            if (i == 0) {
              var data1 = mmm
              this.setState({ data1: mmm })
              /////firm comparent
              for (let i = 0; i < this.state.firm.length - 1; i++) {
                if (this.state.firm[i].sid == data1[0].seller) {
                  this.setState({ name1: this.state.firm[i].firmname })
                  console.log(this.state.name1)
                }
              }
              // this.setState({ name1: data1[0].seller });
            } else if (i == 1) {
              var data2 = mmm
              this.setState({ data2: mmm })
              for (let i = 0; i < this.state.firm.length - 1; i++) {
                if (this.state.firm[i].sid == data2[0].seller) {
                  this.setState({ name2: this.state.firm[i].firmname })
                }
              }
            } else if (i == 2) {
              var data3 = mmm
              this.setState({ data3: mmm })
              // console.log(data3)
              for (let i = 0; i < this.state.firm.length - 1; i++) {
                if (this.state.firm[i].sid == data3[0].seller) {
                  this.setState({ name3: this.state.firm[i].firmname })
                }
              }
            } else {
            }
          }
          // console.log(this.state.data2);
        }
      })
      .catch(err => {})
  }
  deleteit1 = index => () => {
    var data1 = []
    var ddd = this.state.data1.length
    for (let i = 0; i < ddd; i++) {
      if (i !== index) {
        data1.push(this.state.data1[i])
      }
    }
    this.setState({ data1: data1 })
    console.log(data1)
  }
  deleteit2 = index => () => {
    var data2 = []
    var ddd = this.state.data2.length
    for (let i = 0; i < ddd; i++) {
      if (i !== index) {
        data2.push(this.state.data2[i])
      }
    }
    this.setState({ data2: data2 })
    console.log(data2)
  }
  deleteit3 = index => () => {
    var data3 = []
    var ddd = this.state.data3.length
    for (let i = 0; i < ddd; i++) {
      if (i !== index) {
        data3.push(this.state.data3[i])
      }
    }
    this.setState({ data3: data3 })
    console.log(data3)
  }
  goto = sid => () => {
    // console.log(sid)
    localStorage.setItem('item.sid', sid)
    window.location.href = 'http://13.112.90.13:3000/ProductDetail/sid:' + sid
  }
  check1 = () => {
    if (this.state.input1 == 0) {
      this.setState({ input1: 1 })
      this.setState({ choose: this.state.data1 })
      ///////////////////////////////////////////////total
      var total = 0
      for (let i = 0; i < this.state.data1.length; i++) {
        total += this.state.data1[i].total
      }
      this.setState({ total: total })
      //////////////////////////////////////////////////
      console.log(this.state.data1)
    } else {
      this.setState({ input1: 0 })
    }
  }
  check2 = () => {
    if (this.state.input2 == 0) {
      this.setState({ input2: 1 })
      this.setState({ choose: this.state.data2 })
      ///////////////////////////////////////////////total
      var total = 0
      for (let i = 0; i < this.state.data2.length; i++) {
        total += this.state.data2[i].total
      }
      this.setState({ total: total })
      ///////////////////////////////////////////////total
      console.log(this.state.data2)
    } else {
      this.setState({ input2: 0 })
    }
  }
  check3 = () => {
    if (this.state.input3 == 0) {
      this.setState({ input3: 1 })
      this.setState({ choose: this.state.data3 })
      ///////////////////////////////////////////////total
      var total = 0
      for (let i = 0; i < this.state.data3.length; i++) {
        total += this.state.data3[i].total
      }
      this.setState({ total: total })
      ///////////////////////////////////////////////total
      console.log(this.state.data3)
    } else {
      this.setState({ input3: 0 })
    }
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
          this.state.total + this.state.method_money
        )
        var aaa = JSON.stringify(this.state.choose)
        localStorage.setItem('choose_order', aaa)
        console.log(this.props.userInfo.login)
        window.location.href = 'http://13.112.90.13:3000/Shopping1'
      } else {
        alert('please choose')
      }
    } else {
      alert('please login')
      console.log(this.props.userInfo.login)
    }
  }
  clear = () => {
    localStorage.removeItem('allcart')
    window.location.href = 'http://13.112.90.13:3000/Mycart'
  }
  render() {
    if (
      this.state.data1.length == 0 &&
      this.state.data2.length == 0 &&
      this.state.data3.length == 0
    ) {
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
              <div className="cart-title">
                <h2>我的購物車</h2>
              </div>
              {/* {this.state.data1[].seller} */}
              {/* ////////////////////////////////////////////////////////////data1//////////////////////////////////////////////// */}
              {this.state.data1 == [] ||
              this.state.data1 == undefined ||
              this.state.data1 == '' ? (
                ''
              ) : (
                <div className="myfav-table mb-5">
                  <label class="container1">
                    {this.state.name1}
                    <input type="radio" name="rr" onClick={this.check1} />
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
                      {this.state.data1.map((item, index, array) => (
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td>{this.state.data1[index].productName}</td>

                          <td>{this.state.data1[index].product_price}</td>
                          <td>{this.state.data1[index].number}</td>
                          <td>{this.state.data1[index].total}</td>
                          <td>
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.deleteit1(index)}
                            >
                              刪除
                            </button>
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.goto(
                                this.state.data1[index].product_sid
                              )}
                            >
                              詳細資料
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
              {/* ////////////////////////////////////////////////////////////data2//////////////////////////////////////////////// */}
              {this.state.data2 == [] ||
              this.state.data2 == undefined ||
              this.state.data2 == '' ? (
                ''
              ) : (
                <div className="myfav-table mb-5">
                  <div className="d-flex">
                    <label class="container1">
                      {this.state.name2}
                      <input type="radio" name="rr" onClick={this.check2} />
                      <span class="checkmark" />
                    </label>
                  </div>
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
                      {this.state.data2.map((item, index, array) => (
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td>{this.state.data2[index].productName}</td>

                          <td>{this.state.data2[index].product_price}</td>
                          <td>{this.state.data2[index].number}</td>
                          <td>{this.state.data2[index].total}</td>
                          <td>
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.deleteit2(index)}
                            >
                              刪除
                            </button>
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.goto(
                                this.state.data2[index].product_sid
                              )}
                            >
                              詳細資料
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
              {/* ////////////////////////////////////////////////////////////data3//////////////////////////////////////////////// */}
              {this.state.data3 == [] ||
              this.state.data3 == undefined ||
              this.state.data3 == '' ? (
                ''
              ) : (
                <div className="myfav-table mb-5">
                  <div className="d-flex">
                    <label class="container1">
                      {this.state.name3}
                      <input type="radio" name="rr" onClick={this.check3} />
                      <span class="checkmark" />
                    </label>
                  </div>
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
                      {this.state.data3.map((item, index, array) => (
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td>{this.state.data3[index].productName}</td>
                          <td>{this.state.data3[index].product_price}</td>
                          <td>{this.state.data3[index].number}</td>
                          <td>{this.state.data3[index].total}</td>
                          <td>
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.deleteit3(index)}
                            >
                              刪除
                            </button>
                            <button
                              className="m-1 button button"
                              block
                              onClick={this.goto(
                                this.state.data3[index].product_sid
                              )}
                            >
                              詳細資料
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
              {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
                    <h5>{this.state.total}</h5>
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
                      {this.state.total + this.state.method_money}
                    </h3>
                  </div>{' '}
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
                  <div className="ml-4">
                    <button
                      className="button button-white clear"
                      onClick={this.clear}
                    >
                      clear Mycart
                    </button>
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
