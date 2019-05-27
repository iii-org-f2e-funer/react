import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../styles/product/shop.scss'
import TWzipcode from 'react-twzipcode'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default class Shopping2 extends React.Component {
  constructor() {
    super()
    this.state = {
      years: '',
      months: '',
      csv: '',
      card: '',
    }
  }
  componentDidMount() {}
  finish2 = () => {
    alert('訂單完成')
    console.log(this.state)
    ////////////////////////////////////////////////////////////////////////////////////存回去??
  }
  years = event => {
    // alert(event.target.value)
    this.setState({ years: event.target.value })
  }
  months = event => {
    // alert(event.target.value)
    this.setState({ months: event.target.value })
  }
  card = event => {
    // alert(event.target.value)
    this.setState({ card: event.target.value })
  }
  csv = event => {
    // alert(event.target.value)
    this.setState({ csv: event.target.value })
  }
  render() {
    if (localStorage.paymethod === 'MASTERCARD') {
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
