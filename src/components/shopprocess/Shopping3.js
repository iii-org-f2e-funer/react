import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../styles/product/shop.scss'
import TWzipcode from 'react-twzipcode'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default class Shopping3 extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {}

  render() {
    if (localStorage.paymethod === 'MASTERCARD') {
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
                訂單完成
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
    }
  }
}
