import React from 'react'
import '../styles/cart/cart.scss'
import { Button, Table, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Account from '../components/firm/Account'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IoMdCart } from 'react-icons/io'
// class Mycart extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: [],
//       totall: 0,
//       allcart: [],
//       method_money: 60,
//       method_funshop: 'toshop',
//       login: '',
//     }
//   }

//   componentDidMount() {
//     if (localStorage.allcart) {
//       const allcart = JSON.parse(localStorage.allcart)
//       this.setState({ data: allcart })
//       // this.setState({ smalltotall: smalltotall })
//       var d1_leng = allcart.length
//       console.log(d1_leng)
//       for (let i = 0; i < d1_leng; i++) {
//         allcart[i].totall = allcart[i].price * allcart[i].number
//         this.state.totall += allcart[i].totall
//       }
//       this.setState({
//         data: allcart,
//         totall: this.state.totall,
//         allcart: allcart,
//       })
//       console.log(allcart)

//       this.setState({ login: this.props.userInfo.account })
//     }
//   }

//   deleteit = index => () => {
//     const allcart = []
//     var ttt = 0
//     // alert(JSON.stringify(this.state.data))
//     var ddd = this.state.data.length
//     for (let i = 0; i < ddd; i++) {
//       if (i !== index) {
//         allcart.push(this.state.data[i])
//         ttt += this.state.data[i].totall
//       }
//     }
//     localStorage.setItem('allcart', JSON.stringify(allcart))
//     this.setState({ data: allcart, totall: ttt })

//     // console.log(a1)
//     //刪除後重新設定
//     // this.setState({ data: newItems })
//     // alert(JSON.stringify(this.state.data))
//     // alert(JSON.stringify(newItems))
//   }
//   goto = sid => () => {
//     window.location.href = 'http://localhost:3000/ProductDetail/sid:' + sid
//   }
//   paymethod = event => {
//     var method = event.target.value
//     console.log(event.target.value)
//     if (method === 'tohome') {
//       var sss = 130
//       this.setState({ method_money: 130 })
//     } else if (method === 'toshop') {
//       sss = 60
//       this.setState({ method_money: 60 })
//     }
//     this.setState({
//       totall2: this.state.totall + this.state.method_money,
//       method_funshop: method,
//     })
//   }
//   gotocheck = () => {
//     if (this.state.login) {
//       localStorage.setItem('method_funshop', this.state.method_funshop)
//       localStorage.setItem(
//         'funapptotal',
//         this.state.totall + this.state.method_money
//       )
//     } else {
//       alert('')
//       // this.props.login()
//     }
//   }
//   render() {
//     {
//       this.props.onShow()
//     }
//     if (
//       localStorage.allcart == undefined ||
//       localStorage.allcart == '' ||
//       localStorage.allcart == '[]'
//     ) {
//       return (
//         <>
//           <div className="cart">
//             <div className="container">
//               <ul className="cart_nav">
//                 <li>
//                   <Link to="/Mycart">
//                     <div className="mycart">購物車</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Myfav" activeClassName="active">
//                     <div className="myfav">我的收藏</div>
//                   </Link>
//                 </li>
//               </ul>
//               <div className="myfav0-table">
//                 <div className="cart-img">
//                   <img
//                     src={process.env.PUBLIC_URL + '/images/product/cart.png'}
//                     width="300px"
//                   />

//                   <div className="words">購物車是空的喔...</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )
//     } else {
//       return (
//         <>
//           <div className="cart">
//             <div className="container">
//               <div className="cart-title">
//                 <h2>我的購物車</h2>
//               </div>
//               <ul className="cart_nav">
//                 <li>
//                   <Link to="/Mycart">
//                     <div className="mycart">購物車</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Myfav" activeClassName="active">
//                     <div className="myfav">我的收藏</div>
//                   </Link>
//                 </li>
//               </ul>
//               <div className="myfav-table mb-5">
//                 <Table striped bordered hover>
//                   <thead className="table_head">
//                     <tr>
//                       <th />
//                       <th>商品名稱</th>
//                       <th>店家</th>
//                       <th>單價</th>
//                       <th>數量</th>
//                       <th>小計</th>
//                       <th>操作</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {this.state.data.map((item, index, array) => (
//                       <tr>
//                         <td key={index}>{index + 1}</td>
//                         <td>{this.state.data[index].productName}</td>
//                         <td>{this.state.data[index].seller_sid}</td>
//                         <td>{this.state.data[index].price}</td>
//                         <td>{this.state.data[index].number}</td>
//                         <td>{this.state.data[index].totall}</td>
//                         <td>
//                           <button
//                             className="m-1 button button"
//                             block
//                             onClick={this.deleteit(index)}
//                           >
//                             刪除
//                           </button>
//                           <button
//                             className="m-1 button button"
//                             block
//                             onClick={this.goto(this.state.data[index].sid)}
//                           >
//                             詳細資料
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//                 <Table striped bordered hover>
//                   <thead className="table_head">
//                     <tr>
//                       <th />
//                       <th>商品名稱</th>
//                       <th>店家</th>
//                       <th>單價</th>
//                       <th>數量</th>
//                       <th>小計</th>
//                       <th>操作</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {this.state.data.map((item, index, array) => (
//                       <tr>
//                         <td key={index}>{index + 1}</td>
//                         <td>{this.state.data[index].productName}</td>
//                         <td>{this.state.data[index].seller_sid}</td>
//                         <td>{this.state.data[index].price}</td>
//                         <td>{this.state.data[index].number}</td>
//                         <td>{this.state.data[index].totall}</td>
//                         <td>
//                           <button
//                             className="m-1 button button"
//                             block
//                             onClick={this.deleteit(index)}
//                           >
//                             刪除
//                           </button>
//                           <button
//                             className="m-1 button button"
//                             block
//                             onClick={this.goto(this.state.data[index].sid)}
//                           >
//                             詳細資料
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </div>
//               <div className="check mt-5">
//                 <div className="remind">
//                   <label>提醒您</label>
//                   <div>
//                     選擇宅配請填寫正確收件人姓名，避免包裹無法送達
//                     <br />
//                     選擇超商取貨請填寫正確收件人姓名，避免無法領取
//                     <br />
//                   </div>
//                 </div>
//                 <div className="gotocheck">
//                   <div className="money">
//                     <h5>總計</h5>
//                     <h5>{this.state.totall}</h5>
//                   </div>
//                   <div className="paymethod money">
//                     <h5>取貨方式</h5>
//                     <select className="GET-control" onChange={this.paymethod}>
//                       <option className="dropdown" value="toshop">
//                         超商取貨
//                       </option>
//                       <option className="dropdown" value="tohome">
//                         宅配到府
//                       </option>
//                     </select>
//                   </div>
//                   <div className="money">
//                     <h5>運費</h5>
//                     <h5>{this.state.method_money}</h5>
//                   </div>
//                   <div className="money">
//                     <h5>訂單金額總計</h5>
//                     <h3 className="total">
//                       {this.state.totall + this.state.method_money}
//                     </h3>
//                   </div>
//                   <div className="checkbutton">
//                     <div className="">
//                       <Link to="/product">
//                         <button
//                           className=" button
//                         checkbutton1"
//                         >
//                           繼續購物
//                         </button>
//                       </Link>
//                     </div>
//                     <div className="">
//                       <Link to="/Shopping1">
//                         <button
//                           className="button checkbutton2"
//                           onClick={this.gotocheck}
//                         >
//                           前往結帳
//                         </button>
//                       </Link>

//                       {/* <button
//                         className="button checkbutton2"
//                         onClick={this.gotocheck}
//                       >
//                         前往結帳
//                       </button> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )
//     }
//   }
// }
class Mycart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      totall: 0,
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
    }
  }

  componentDidMount() {
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
          this.setState({ name1: data1[0].seller })
          // console.log(data1)
        } else if (i == 1) {
          var data2 = mmm
          this.setState({ data2: mmm })
          // console.log(data2[0].seller)
          this.setState({ name2: data2[0].seller })
        } else if (i == 2) {
          var data3 = mmm
          this.setState({ data3: mmm })
          // console.log(data3)
          this.setState({ name3: data3[0].seller })
        } else {
        }
      }
      console.log(this.state.data2)
    }
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
    window.location.href = 'http://localhost:3000/ProductDetail/sid:' + sid
  }
  check1 = () => {
    if (this.state.input1 == 0) {
      this.setState({ input1: 1 })
    } else {
      this.setState({ input1: 0 })
    }
  }
  check2 = () => {
    if (this.state.input2 == 0) {
      this.setState({ input2: 1 })
    } else {
      this.setState({ input2: 0 })
    }
  }
  check3 = () => {
    if (this.state.input3 == 0) {
      this.setState({ input3: 1 })
    } else {
      this.setState({ input3: 0 })
    }
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
              {/* {this.state.data1[].seller} */}
              {/* ////////////////////////////////////////////////////////////data1//////////////////////////////////////////////// */}
              {this.state.data1 == [] ||
              this.state.data1 == undefined ||
              this.state.data1 == '' ? (
                ''
              ) : (
                <div className="myfav-table mb-5">
                  <input type="checkbox" aria-label="" onClick={this.check1} />
                  {this.state.name1}
                  <Table striped bordered hover>
                    <thead className="table_head">
                      <tr>
                        <th />
                        <th>商品名稱</th>
                        <th>店家</th>
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
                          <td>{this.state.data1[index].seller}</td>
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
                  <input type="checkbox" aria-label="" onClick={this.check2} />
                  {this.state.name2}
                  <Table striped bordered hover>
                    <thead className="table_head">
                      <tr>
                        <th />
                        <th>商品名稱</th>
                        <th>店家</th>
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
                          <td>{this.state.data2[index].seller}</td>
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
                  <input type="checkbox" aria-label="" onClick={this.check3} />
                  {this.state.name3}
                  <Table striped bordered hover>
                    <thead className="table_head">
                      <tr>
                        <th />
                        <th>商品名稱</th>
                        <th>店家</th>
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
                          <td>{this.state.data3[index].seller}</td>
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
                    {/* <h5>{this.state.totall}</h5> */}
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
                    {/* <h5>{this.state.method_money}</h5> */}
                  </div>
                  <div className="money">
                    <h5>訂單金額總計</h5>
                    <h3 className="total">
                      {/* {this.state.totall + this.state.method_money} */}
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
                      <Link to="/Shopping1">
                        <button
                          className="button checkbutton2"
                          onClick={this.gotocheck}
                        >
                          前往結帳
                        </button>
                      </Link>
                      {/* <button
                        className="button checkbutton2"
                        onClick={this.gotocheck}
                      >
                        前往結帳
                      </button> */}
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
