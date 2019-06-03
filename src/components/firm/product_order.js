import React from 'react'
import { Table, Modal, Button } from 'react-bootstrap'
import { thisExpression } from '@babel/types'

class product_order extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleShow = this.handleShow.bind()
    this.handleClose = this.handleClose.bind()
    this.state = {
      order: [],
      show: false,
      list: { allcart: [] },
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/product/firm_order', { credentials: 'include' })
      //fetch order
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        console.log(jsonData)
        var order = jsonData
        for (let i = 0; i < jsonData.length; i++) {
          if (order[i].getmethod == 'toshop') {
            order[i].getmethod = '超商取貨'
          }
          order[i].cre_date = order[i].cre_date.slice(0, 16)
          order[i].allcart = JSON.parse(order[i].allcart)
        }
        this.setState({ order: order })
        // console.log(this.state.order)
      })
      .catch(err => {})
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleShow = index => () => {
    this.setState({ show: true, list: this.state.order[index] })
  }

  render() {
    console.log(this.state.order)
    return (
      <>
        <h5>商品訂單紀錄</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5">
            <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  <th scope="col">訂單日期</th>
                  <th scope="col">訂單編號</th>
                  <th scope="col">訂購人姓名</th>
                  <th scope="col">收貨方法</th>
                  <th scope="col">付款方式</th>
                  <th scope="col">查看</th>
                </tr>
              </thead>
              <tbody>
                {this.state.order.map((item, index, array) => (
                  <>
                    <tr>
                      <td className="name">
                        {this.state.order[index].cre_date}
                      </td>
                      <td className="name">
                        {this.state.order[index].order_sid}
                      </td>
                      <td className="name">
                        {this.state.order[index].order_name}
                      </td>
                      <td className="name">
                        {this.state.order[index].getmethod}
                      </td>
                      <td className="name">
                        {this.state.order[index].paymethod}
                      </td>
                      <td>
                        <button
                          className="button-white button"
                          variant="primary"
                          onClick={this.handleShow(index)}
                        >
                          查看
                        </button>
                      </td>
                    </tr>
                  </>
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
                    {this.state.list.allcart.map((item, ind, array) => (
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

export default product_order
