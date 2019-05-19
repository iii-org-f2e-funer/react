import React from 'react'
import '../styles/cart/fav.scss'
import { Button, Table } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
const Myfav = () => {
  return (
    <>
      <div className="fav">
        <div className="container">
          <ul className="cart_nav">
            <li>
              <Link to="/Mycart">
                <div className="mycart ">購物車</div>
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
                  <th />
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
                      放入購物車
                    </Button>
                    <Button className="m-1 button button" block>
                      刪除
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Link to="/product">
            <Button className="m-1 button " block>
              回賣場
            </Button>
          </Link>
          <Button className="m-1 button" block>
            整批放入購物車
          </Button>
        </div>
      </div>
    </>
  )
}

export default Myfav
