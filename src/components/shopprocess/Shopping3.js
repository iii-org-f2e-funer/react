import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../styles/product/shop.scss';
import TWzipcode from 'react-twzipcode';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default class Shopping3 extends React.Component {
  constructor() {
    super();
    this.state = {
      all: [],
    };
  }
  componentDidMount() {
    var funapptotal = localStorage.funapptotal;
    var all = JSON.parse(localStorage.choose_order);
    var temp = JSON.parse(localStorage.temp_order);
    this.setState({
      all: all,
      totall: funapptotal,
      fee: temp.fee,
      total: temp.totall,
      seller: all[0].seller,
    });
    // localStorage.setItem('allcart', '');
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
                <div>SELLER:{this.state.seller}</div>
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
                  </div>
                ))}
                <div className="end-blocks">
                  <div className="end-block aaa">
                    <div className="title-name ">運費</div>
                    <div className="end-money">{this.state.fee}</div>
                  </div>
                  <div className="end-block">
                    <div className="title-name">總金額</div>
                    <div className="end-money2">{this.state.total}</div>
                  </div>
                </div>
                <button className="button button3">回首頁</button>
                <button className="button button3">回桌遊列表</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
