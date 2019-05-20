import React from 'react'
import '../styles/cart/cart.scss'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Mycart = () => {
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
          <div className="myfav-table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th />
                  <th>商品名稱</th>
                  <th>商品名稱</th>
                  <th>店家</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img
                      src={process.env.PUBLIC_URL + '/images/product/game1.jpg'}
                      width="104px"
                      height="104px"
                    />
                  </td>
                  <td>矮人礦坑</td>
                  <td>Game Square 遊戲平方 中山店</td>
                  <td>790</td>
                  <td>1</td>
                  <td>790</td>
                  <td>
                    <Button className="m-1 button button" block>
                      刪除
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="check">
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
                <h5>小計</h5>
                <h5>123</h5>
              </div>
              <div className="paymethod money">
                <h5>付款方式</h5>
                <h5>123</h5>
              </div>
              <div className="money">
                <h5>運費</h5>
                <h5>123</h5>
              </div>
              <div className="money">
                <h5>訂單金額總計</h5>
                <h3 className="total">123</h3>
              </div>
              <div className="checkbutton">
                <div className="m-4">
                  <Link to="/product">
                    <Button className="m-4 button " block>
                      繼續購物
                    </Button>
                  </Link>
                </div>
                <div className="m-4">
                  <Link to="/Shopping1">
                    <Button className="m-4 button" block>
                      前往結帳
                    </Button>
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

export default Mycart
