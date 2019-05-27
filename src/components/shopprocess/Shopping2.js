import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../styles/product/shop.scss'

import { Link } from 'react-router-dom'

class Shopping2 extends React.Component {
  constructor() {
    super()
    this.state = {
      years: 0,
      months: 0,
      csv: 0,
      card: 0,
      paymethod: localStorage.paymethod,
      getmethod: localStorage.method_funshop,
      order: {},
    }
  }
  componentDidMount() {}
  finish2 = () => {
    var temp_order = JSON.parse(localStorage.temp_order)
    ///orderlist
    var order = {
      //////user_sid
      login_user_sid: 1,
      ////cartlist
      allcart: localStorage.allcart,
      ////card
      year_card: this.state.year_card,
      month_card: this.state.month_card,
      csv: this.state.csv,
      card_number: this.state.card_number,
      ////how to
      paymethod: localStorage.paymethod,
      getmethod: localStorage.method_funshop,
      ////price
      Freight: 0,
      totalprice: localStorage.funapptotal,
      /////geter
      geter_name: temp_order.geter_name,
      geter_addr: temp_order.geter_addr,
      geter_city: temp_order.geter_city,
      geter_dist: temp_order.geter_dist,
      geter_email: temp_order.geter_email,
      geter_phone: temp_order.geter_phone,
      /////order
      order_name: temp_order.order_name,
      order_city: temp_order.order_city,
      order_dist: temp_order.order_dist,
      order_addr: temp_order.order_addr,
      order_email: temp_order.order_email,
      order_phone: temp_order.order_phone,
    }
    alert('訂單完成')
    if (localStorage.method_funshop === 'tohome') {
      order.Freight = 130
    } else {
      order.Freight = 60
    }
    this.setState({ order: order })
    console.log(order)
    ////////////////////////////////////////////////////////////////////////////////////存回去??
  }
  years = event => {
    this.setState({ year_card: event.target.value })
  }
  months = event => {
    this.setState({ month_card: event.target.value })
  }
  card = event => {
    this.setState({ card_number: event.target.value })
  }
  csv = event => {
    this.setState({ csv: event.target.value })
  }
  render() {
    if (localStorage.paymethod === 'MASTERCARD') {
      return (
        <>
          {this.state.csv}
          <div className="Shopping2">
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

                <div className="step1-form">
                  <div className="form-controll">
                    <div className="title-titles">
                      <div className="title-people">信用卡填寫</div>{' '}
                    </div>
                    <div className="">
                      <Form.Label>卡號</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="輸入卡號"
                        onBlur={this.card}
                      />
                    </div>
                    <div className="">
                      <h5>有效期限</h5>{' '}
                      <select className="" onBlur={this.years}>
                        <option className="dropdown" value="2019">
                          2019
                        </option>
                        <option className="dropdown" value="2020">
                          2020
                        </option>
                        <option className="dropdown" value="2021">
                          2021
                        </option>
                        <option className="dropdown" value="2022">
                          2022
                        </option>
                        <option className="dropdown" value="2023">
                          2023
                        </option>
                        <option className="dropdown" value="2024">
                          2024
                        </option>
                        <option className="dropdown" value="2025">
                          2025
                        </option>
                        <option className="dropdown" value="2026">
                          2026
                        </option>
                        <option className="dropdown" value="2027">
                          2027
                        </option>
                        <option className="dropdown" value="2028">
                          2028
                        </option>
                        <option className="dropdown" value="2029">
                          2029
                        </option>
                        <option className="dropdown" value="2030">
                          2030
                        </option>
                      </select>
                      年
                      <select className="" onBlur={this.months}>
                        <option className="dropdown" value="1">
                          1
                        </option>
                        <option className="dropdown" value="2">
                          2
                        </option>
                        <option className="dropdown" value="3">
                          3
                        </option>
                        <option className="dropdown" value="4">
                          4
                        </option>
                        <option className="dropdown" value="5">
                          5
                        </option>
                        <option className="dropdown" value="6">
                          6
                        </option>
                        <option className="dropdown" value="7">
                          7
                        </option>
                        <option className="dropdown" value="8">
                          8
                        </option>
                        <option className="dropdown" value="9">
                          9
                        </option>
                        <option className="dropdown" value="10">
                          10
                        </option>
                        <option className="dropdown" value="11">
                          11
                        </option>
                        <option className="dropdown" value="12">
                          12
                        </option>
                      </select>
                      月
                      <div>
                        <Form.Label>驗證碼</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="輸入驗證碼"
                          onBlur={this.csv}
                        />
                      </div>
                    </div>

                    <div className="buttons">
                      <Link to="/Shopping1">
                        <div className="buttonall">
                          <Button className="button2 button">上一步</Button>
                        </div>
                      </Link>
                      <Link to="/Shopping3">
                        <div className="buttonall" onClick={this.finish2}>
                          <Button className="button1 button">完成訂單</Button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    } else if (localStorage.paymethod === 'ATM') {
      return (
        <>
          <div className="Shopping2">
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

                <div className="step1-form">
                  <div className="form-controll">
                    <div className="title-titles">
                      <div className="title-people">ATM</div>{' '}
                    </div>

                    <div className="buttons">
                      <Link to="/Shopping1">
                        <div className="buttonall">
                          <Button className="button2 button">上一步</Button>
                        </div>
                      </Link>
                      <Link to="/Shopping3">
                        <div className="buttonall">
                          <Button className="button1 button">下一步</Button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    } else if (localStorage.paymethod === 'TOHOMEPAY') {
      return (
        <>
          <div className="Shopping2">
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

                <div className="step1-form">
                  <div className="form-controll">
                    <div className="title-titles">
                      <div className="title-people">貨到付款</div>{' '}
                    </div>

                    <div className="buttons">
                      <Link to="/Shopping1">
                        <div className="buttonall">
                          <Button className="button2 button">上一步</Button>
                        </div>
                      </Link>
                      <Link to="/Shopping3">
                        <div className="buttonall">
                          <Button
                            className="button1 button"
                            onclick={this.finish2}
                          >
                            完成訂單
                          </Button>
                        </div>
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

export default Shopping2
