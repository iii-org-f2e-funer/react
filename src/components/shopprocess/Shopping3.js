import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../styles/product/shop.scss'
import TWzipcode from 'react-twzipcode'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default class Shopping3 extends React.Component {
  constructor() {
    super()
    this.state = {
      all: [],
    }
  }
  componentDidMount() {
    var funapptotal = localStorage.funapptotal
    var all = JSON.parse(localStorage.allcart)
    this.setState({ all: all, totall: funapptotal })
    localStorage.setItem('allcart', '')
  }

  render() {
    return (
      <>
        <div className="Shopping3">
          <div className="container">
            <div className="container1">
              <div className="stepall">
                <div className="step1 step">1</div>
                <div className="line1 line" />
                <div className="step2 step">2</div>
                <div className="line2 line" />
                <div className="step3 step">3</div>
              </div>
              <div className="step-word">
                <div className="step1-word word">訂購資訊</div>
                <div className="step1-word word">付款資訊</div>
                <div className="step1-word word">購買成功</div>
              </div>

              <div className="logo2">
                <img
                  id="purplemonster"
                  src={
                    process.env.PUBLIC_URL + '/images/personalFolder/logo.png'
                  }
                  width="150px"
                />
              </div>
              <div className="logo2">
                <h3>購買成功</h3>
              </div>
              <div className="orderdetail">
                <div className="orderdetail-title">
                  <h3>購買清單</h3>
                </div>
                {this.state.all.map((item, index, array) => (
                  <div className="title-blocks">
                    <div className="title-block">
                      <div className="title-name">商品名稱:</div>
                      <div className="title-productName">
                        {this.state.all[index].productName}
                      </div>
                    </div>{' '}
                    <div className="title-block">
                      <div className="title-name">單價:</div>
                      <div className="title-content">
                        {this.state.all[index].price}
                      </div>
                    </div>
                    <div className="title-block">
                      <div className="title-name">數量:</div>
                      <div className="title-content">
                        {this.state.all[index].number}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="end-blocks">
                  <div className="end-block aaa">
                    <div className="title-name ">運費</div>
                    <div className="end-money">60</div>
                  </div>
                  <div className="end-block">
                    <div className="title-name">總金額</div>
                    <div className="end-money2">{this.state.totall}</div>
                  </div>
                </div>
                {/* <table>
                  <tr>
                    <th>name</th>
                    <th>number</th>
                    <th>money</th>
                    <th>moneys</th>
                  </tr>
                  {this.state.all.map((item, index, array) => (
                    <tr>
                      <td>{this.state.all[index].productName}</td>
                      <td>{this.state.all[index].number}</td>
                      <td>{this.state.all[index].price}</td>
                      <td>{this.state.all[index].totall}</td>
                    </tr>
                  ))}
                </table>
                total:{this.state.totall} */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
