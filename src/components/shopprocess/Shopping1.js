import React from 'react'
import { Form } from 'react-bootstrap'
import '../../styles/product/shop.scss'
import TWzipcode from 'react-twzipcode'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default class Shopping1 extends React.Component {
  constructor() {
    super()
    this.state = {
      login_user: '',
      order_name: '',
      order_city: '',
      order_dist: '',
      order_addr: '',
      order_phone: '',
      order_email: '',
      geter_name: '',
      geter_city: '',
      geter_dist: '',
      geter_addr: '',
      geter_phone: '',
      geter_email: '',
      all: [],
      allprice: 0,
    }
  }
  componentDidMount() {
    if (localStorage.temp_order) {
      var data = JSON.parse(localStorage.temp_order)
      this.setState({
        order_name: data.order_name,
        order_city: data.order_city,
        order_dist: data.order_dist,
        order_addr: data.order_addr,
        order_phone: data.order_phone,
        order_email: data.order_email,
        geter_name: data.geter_name,
        geter_city: data.geter_city,
        geter_dist: data.geter_dist,
        geter_addr: data.geter_addr,
        geter_phone: data.geter_phone,
        geter_email: data.geter_email,
      })
      document.getElementById('name1').value = data.order_name
      document.getElementById('name2').value = data.geter_name
      document.getElementById('addr1').value = data.order_addr
      document.getElementById('addr2').value = data.geter_addr
      document.getElementById('phone1').value = data.order_phone
      document.getElementById('phone2').value = data.geter_phone
      document.getElementById('email1').value = data.order_email
      document.getElementById('email2').value = data.geter_email
    }
    var funapptotal = localStorage.funapptotal
    var all = JSON.parse(localStorage.choose_order)
    this.setState({ all: all, totall: funapptotal })
    if (localStorage.method_funshop == 'tohome') {
      this.setState({ fee: 130 })
    } else {
      this.setState({ fee: 60 })
    }
  }
  getordername = event => {
    this.setState({ order_name: event.target.value })
    var aaa = event.target.value
    if (aaa === '') {
      document.getElementById('name1-mute').innerText = '請填入姓名'
    } else {
      document.getElementById('name1-mute').innerText = ''
    }
  }
  handlecityChange = event => {
    this.setState({ order_city: event.county })
  }
  handledistChange = event => {
    this.setState({ order_dist: event.district })
    console.log(this.state)
  }
  getorderadd = event => {
    this.setState({ order_addr: event.target.value })
    // console.log(this.state)
    var aaa = event.target.value
    if (aaa === '') {
      document.getElementById('addr1-mute').innerText = '請填入地址'
    } else {
      document.getElementById('addr1-mute').innerText = ''
    }
  }
  getorderphone = event => {
    this.setState({ order_phone: event.target.value })
    var aaa = event.target.value
    var aaaa = /^(09)[0-9]{8}$/.test(aaa)
    if (aaaa === false) {
      document.getElementById('phone1-mute').innerText = '請填入正確手機號碼'
    } else {
      document.getElementById('phone1-mute').innerText = ''
    }
  }
  getorderemail = event => {
    this.setState({ order_email: event.target.value })
    console.log(event.target.value)
    var aaa = event.target.value
    var aaaa = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      aaa
    )
    console.log(aaaa)
    if (aaaa === false) {
      document.getElementById('email1-mute').innerText = 'email格式錯誤'
    } else {
      document.getElementById('email1-mute').innerText = ''
    }
  }
  getordername2 = event => {
    this.setState({ geter_name: event.target.value })
  }
  handlecityChange2 = event => {
    this.setState({ geter_city: event.county })
  }
  handledistChange2 = event => {
    this.setState({ geter_dist: event.district })
    console.log(this.state)
  }
  getorderadd2 = event => {
    this.setState({ geter_addr: event.target.value })
    console.log(this.state)
  }
  getorderphone2 = event => {
    this.setState({ geter_phone: event.target.value })
    console.log(this.state)
  }
  getorderemail2 = event => {
    this.setState({ geter_email: event.target.value })
    console.log(this.state)
  }
  goto2 = () => {
    console.log(this.state)
    var data = JSON.stringify(this.state)
    console.log(data)
    localStorage.setItem('temp_order', data)
  }
  paymethod = event => {
    // alert(event.target.value)
    localStorage.setItem('paymethod', event.target.value)
  }

  render() {
    return (
      <>
        <div className="Shopping1">
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
                        {this.state.all[index].product_price}
                      </div>
                    </div>
                    <div className="title-block">
                      <div className="title-name">數量:</div>
                      <div className="title-content">
                        {this.state.all[index].number}
                      </div>
                    </div>
                    <div className="title-block">
                      <div className="title-name">total:</div>
                      <div className="title-content">
                        {this.state.all[index].total}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="end-blocks">
                  <div className="end-block aaa">
                    <div className="title-name ">運費</div>
                    <div className="end-money">{this.state.fee}</div>
                  </div>
                  <div className="end-block">
                    <div className="title-name">總金額</div>
                    <div className="end-money2">{this.state.totall}</div>
                  </div>
                </div>
              </div>
              <div className="step1-form">
                <div className="form-controll">
                  <div className="title-titles">
                    <div className="title-people">訂購人資料</div>{' '}
                    <div>
                      <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="同會員資料" />
                      </Form.Group>
                    </div>
                  </div>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>姓名</Form.Label>
                      <Form.Control
                        type="text"
                        id="name1"
                        placeholder="輸入姓名"
                        onBlur={this.getordername}
                      />
                      <Form.Text className="text-mute" id="name1-mute" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>地址</Form.Label>
                      <TWzipcode
                        id="cuntry"
                        countyFieldName="order_city"
                        districtFieldName="order_dist"
                        countyValue={this.state.order_city}
                        districtValue={this.state.order_dist}
                        css={[
                          'form-control county-sel',
                          'form-control district-sel',
                          'form-control zipcode d-none',
                        ]}
                        handleChangeCounty={this.handlecityChange}
                        handleChangeDistrict={this.handledistChange}
                      />
                      <Form.Control
                        type="text"
                        placeholder=""
                        onBlur={this.getorderadd}
                        id="addr1"
                      />
                      <Form.Text className="text-mute" id="addr1-mute" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>手機</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="輸入手機"
                        // onChange={this.getorderphone}
                        onBlur={this.getorderphone}
                        id="phone1"
                      />
                      <Form.Text className="text-mute" id="phone1-mute" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>電子信箱</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder=""
                        onBlur={this.getorderemail}
                        id="email1"
                      />
                      <Form.Text className="text-mute" id="email1-mute" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="form-controll">
                  <div className="title-titles">
                    <div className="title-people">收件人資料</div>{' '}
                    <div>
                      <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="同訂購人資料" />
                      </Form.Group>
                    </div>
                  </div>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>姓名</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="輸入姓名"
                        onBlur={this.getordername2}
                        id="name2"
                      />
                      <Form.Text className="text-muted" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>地址</Form.Label>
                      <TWzipcode
                        countyFieldName="pt_city"
                        districtFieldName="pt_dist"
                        css={[
                          'form-control county-sel',
                          'form-control district-sel',
                          'form-control zipcode d-none',
                        ]}
                        countyValue={this.state.geter_city}
                        districtValue={this.state.geter_dist}
                        handleChangeCounty={this.handlecityChange2}
                        handleChangeDistrict={this.handledistChange2}
                      />
                      <Form.Control
                        type="text"
                        placeholder=""
                        onBlur={this.getorderadd2}
                        id="addr2"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>手機</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="輸入手機"
                        onBlur={this.getorderphone2}
                        id="phone2"
                      />
                      <Form.Text className="text-muted" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>電子信箱</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder=""
                        onBlur={this.getorderemail2}
                        id="email2"
                      />
                      <Form.Text className="text-muted" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>付款方式</Form.Label>
                      <select className="pay-control" onBlur={this.paymethod}>
                        <option className="dropdown" value="MASTERCARD">
                          信用卡
                        </option>
                        <option className="dropdown" value="TOHOMEPAY">
                          貨到付款
                        </option>
                      </select>
                    </Form.Group>

                    <div className="buttons-control">
                      <Link to="/Mycart">
                        <button className="button2 button">回購物車</button>
                      </Link>
                      <Link to="/Shopping2">
                        <button
                          className="button1 button "
                          onClick={this.goto2}
                        >
                          下一步
                        </button>
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
