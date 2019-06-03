import React from 'react'
import { Table } from 'react-bootstrap'

class product_order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch('//localhost:3002/product/firm_order', { credentials: 'include' })
      //fetch order
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        // console.log(jsonData)
        this.setState({ order: jsonData })
        // console.log(this.state.order)
      })
      .catch(err => {})
  }
  render() {
    return (
      <>
        <h5>商品訂單紀錄</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5">
            {/* <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  {' '}
                  <th scope="col">date</th>
                  <th scope="col">訂單編號</th>
                  <th scope="col">訂購人姓名</th>
                  <th scope="col">收貨方法</th>
                  <th scope="col">付款方式</th>
                  <th scope="col">我要退貨</th>
                </tr>
              </thead>
              <tbody>
                {this.state.order.map((item, index, array) => (
                  <tr>
                    <td className="name">{this.state.order[index].cre_date}</td>
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
                    </td>{' '}
                    <td>
                      <button className="button-white button">退貨</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table> */}
          </div>
        </div>
      </>
    )
  }
}

export default product_order
