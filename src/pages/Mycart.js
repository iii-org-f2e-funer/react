import React from 'react'
import '../styles/cart/cart.scss'
import { Button, Table } from 'react-bootstrap'
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
      totall: 0,
      allcart: [],
      method_money: 60,
      method_funshop: 'toshop',
      login: '',
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
      console.log(allcart)

      this.setState({ login: this.props.userInfo.account })
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
      totall2: this.state.totall + this.state.method_money,
      method_funshop: method,
    })
  }
  gotocheck = () => {
    if (this.state.login) {
      localStorage.setItem('method_funshop', this.state.method_funshop)
      localStorage.setItem(
        'funapptotal',
        this.state.totall + this.state.method_money
      )
    } else {
      alert('沒登入')
    }
  }
  render() {
    if (
      localStorage.allcart == undefined ||
      localStorage.allcart == '' ||
      localStorage.allcart == '[]'
    ) {
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
              <div className="myfav0-table">
                <div className="cart-img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/product/cart.png'}
                    width="300px"
                  />

                  <div className="words">購物車是空的喔...</div>
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
              <div className="myfav-table mb-5">
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
                    {this.state.data.map((item, index, array) => (
                      <tr>
                        <td key={index}>{index + 1}</td>
                        <td>{this.state.data[index].productName}</td>
                        <td>{this.state.data[index].seller_sid}</td>
                        <td>{this.state.data[index].price}</td>
                        <td>{this.state.data[index].number}</td>
                        <td>{this.state.data[index].totall}</td>
                        <td>
                          <button
                            className="m-1 button button"
                            block
                            onClick={this.deleteit(index)}
                          >
                            刪除
                          </button>
                          <button
                            className="m-1 button button"
                            block
                            onClick={this.goto(this.state.data[index].sid)}
                          >
                            詳細資料
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
                    {this.state.data.map((item, index, array) => (
                      <tr>
                        <td key={index}>{index + 1}</td>
                        <td>{this.state.data[index].productName}</td>
                        <td>{this.state.data[index].seller_sid}</td>
                        <td>{this.state.data[index].price}</td>
                        <td>{this.state.data[index].number}</td>
                        <td>{this.state.data[index].totall}</td>
                        <td>
                          <button
                            className="m-1 button button"
                            block
                            onClick={this.deleteit(index)}
                          >
                            刪除
                          </button>
                          <button
                            className="m-1 button button"
                            block
                            onClick={this.goto(this.state.data[index].sid)}
                          >
                            詳細資料
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
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
                    <h5>{this.state.totall}</h5>
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
                      {this.state.totall + this.state.method_money}
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
//       var d1_leng = allcart.length
//       var seller = []
//       var ggg = []
//       var index = 0
//       for (let i = 0; i < d1_leng; i++) {
//         var seller_tep = {
//           product_sid: 0,
//           productName: '',
//           number: 0,
//           product_price: 0,
//           total: 0,
//           seller: 0,
//         }
//         seller_tep.productName = allcart[i].productName
//         seller_tep.product_sid = allcart[i].sid
//         seller_tep.product_price = allcart[i].price
//         seller_tep.number = allcart[i].number
//         seller_tep.total = allcart[i].price * allcart[i].number
//         seller_tep.seller = allcart[i].seller_sid
//         seller.push(seller_tep)
//       }
//       // console.log(seller)
//       for (let i = 0; i < seller.length; i++) {
//         index = seller[i].seller

//         a[i].push(seller[i])
//         console.log(index)
//       }
//     }
//   }

//   render() {
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
//                     {/* {this.state.data.map((item, index, array) => (
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
//                     ))} */}
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
//                     {/* <h5>{this.state.totall}</h5> */}
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
//                     {/* <h5>{this.state.method_money}</h5> */}
//                   </div>
//                   <div className="money">
//                     <h5>訂單金額總計</h5>
//                     <h3 className="total">
//                       {/* {this.state.totall + this.state.method_money} */}
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
