// 訂單
import React from 'react'
import { withRouter } from 'react-router'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import '../../styles/cart/cart.scss'
import { Button, Table, InputGroup, Modal } from 'react-bootstrap'
// import '../../styles/cart/cart.scss'
class UserShopping extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleShow = this.handleShow.bind()
    this.handleClose = this.handleClose.bind()
    this.state = {
      data: [],
      data1: [],
      show: false,
      list: [],
    }
  }

  componentDidMount() {
    fetch('//13.112.90.13:3002/member/productorder', {})
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        var aa = []
        console.log(typeof jsonData)
        console.log(jsonData)
        for (let i = 0; i < jsonData.length; i++) {
          if (jsonData[i].login_user_sid == this.props.userInfo.account) {
            if (jsonData[i].getmethod == 'tohome') {
              jsonData[i].getmethod = '宅配'
            } else {
              jsonData[i].getmethod = '超商取貨'
            }
            jsonData[i].allcart = JSON.parse(jsonData[i].allcart)
            jsonData[i].cre_date = jsonData[i].cre_date.slice(0, 16)
            aa.push(jsonData[i])
          }
        }
        console.log(aa)
        // console.log(aa)
        this.setState({
          data1: aa,
        })
      })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleShow = index => () => {
    this.setState({ show: true, list: this.state.data1[index].allcart })
  }

  render() {
    return (
      <>
        <h5>訂單查詢</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5">
            <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  <th scope="col">日期</th>
                  <th scope="col">訂單編號</th>
                  <th scope="col" className="text-nowrap">
                    訂購人姓名
                  </th>
                  <th scope="col">收貨方法</th>
                  <th scope="col">付款方式</th>
                  <th scope="col">我要退貨</th>
                  <th scope="col">查看</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data1.map((item, index, array) => (
                  <tr>
                    {' '}
                    <td className="name">{this.state.data1[index].cre_date}</td>
                    <td className="name">
                      {this.state.data1[index].order_sid}
                    </td>
                    <td className="name">
                      {this.state.data1[index].order_name}
                    </td>
                    <td className="name">
                      {this.state.data1[index].getmethod}
                    </td>
                    <td className="name">
                      {this.state.data1[index].paymethod}
                    </td>{' '}
                    <td>
                      <button className="button-white button">退貨</button>
                    </td>
                    <td>
                      <button
                        className="button-white button watchit"
                        onClick={this.handleShow(index)}
                      >
                        查看
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>商品訂單</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Table striped bordered hover>
                  <thead className="table_head">
                    <tr>
                      <th scope="col">商品名稱</th>
                      <th scope="col">數量</th>
                      <th scope="col">價格</th>
                      <th scope="col">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.map((item, ind, array) => (
                      <tr>
                        <td className="name">{item.productName}</td>
                        <td className="name">{item.number}</td>
                        <td className="name">{item.product_price}</td>
                        <td className="name">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Modal.Body>
              <Modal.Footer>
                <button
                  variant="secondary"
                  onClick={this.handleClose}
                  className="button-white button"
                >
                  關閉
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </>
    )
  }
}
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
  )(UserShopping)
)
