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

  finish2 = () => {
    var temp_order = JSON.parse(localStorage.temp_order)
    var order_str = localStorage.allcart
    //////////////////////////////////////////////////// orderlist ////////////////////////////
    var order = {
      //////user_sid
      login_user_sid: 1,
      ////cartlist
      allcart: localStorage.allcart,
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
      paid: 1,
      cre_date: '',
    }

    //////////////////////////////////////////////////////////////////////////////////
    alert('訂單完成')
    if (localStorage.method_funshop === 'tohome') {
      order.Freight = 130
    } else {
      order.Freight = 60
    }
    this.setState({ order: order })
    console.log(order)

    ////////////////////////////////////// 新增訂單 //////////////////////////////////////////////

    fetch('//localhost:3002/product/product_order', {
      method: 'POST',
      body: JSON.stringify(order),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          console.log('order success')
        } else {
          console.log(obj.message)
        }
      })
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
                    <div className="control-line">
                      <Form.Label>持卡人</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="輸入持卡人姓名"
                        onBlur={this.card}
                      />
                    </div>
                    <div className="control-line">
                      <Form.Label>卡號</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="輸入卡號"
                        onBlur={this.card}
                      />
                    </div>
                    <div className="control-line mt-5">
                      <Form.Label>有效期限</Form.Label>
                      <select className="years" onBlur={this.years}>
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
                      <select className="months" onBlur={this.months}>
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
                        {/* csv  */}
                        <div className="control-line">
                          <Form.Label>驗證碼</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="輸入驗證碼"
                            onBlur={this.csv}
                          />
                        </div>
                      </div>
                      <div className="title-titles">
                        <div className="title-people">注意事項</div>
                      </div>{' '}
                      <div>
                        <p>
                          1.請輸入以上信用卡資料、以便於向發卡行取得交易授權。完成交易授權只是發卡行確認信用卡的有效性及授權交易額度，您的信用卡信用額度在交易金額範圍內會被保留，但不代表您的付款已經完成，這筆交易也還不會出現在您的信用卡帳單中。
                        </p>
                        <p>
                          2.如果您所訂購的商品仍有存貨、且交易條件經確認無誤，我們才會向發卡行請款，只有當我們收到信用卡交易款項時，您的付款程序才算完成。
                        </p>
                        <p>
                          3.為確保網路交易安全，您同意本公司得就此筆交易向發卡銀行、收單行及持卡人核對是否屬實；您所填寫的身份證字號、出生年月日資料，亦將於核對完成後刪除。
                        </p>
                      </div>
                    </div>

                    <div className="buttons">
                      <Link to="/Shopping1">
                        <div className="buttonall">
                          <button className="button2 button">上一步</button>
                        </div>
                      </Link>
                      <Link to="/Shopping3">
                        <div className="buttonall" onClick={this.finish2}>
                          <button className="button1 button">完成訂單</button>
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
