import React from 'react'
import { Table } from 'react-bootstrap'

class product_order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      data: [],
    }
  }
  render() {
    return (
      <>
        <h5>商品訂單紀錄</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5">
            <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  <th />
                  <th>商品名稱</th>
                  <th>店家</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, index, array) => (
                  <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{this.state.data[index].productName}</td>
                    <td>{this.state.data[index].seller_sid}</td>
                    <td>{this.state.data[index].price}</td>
                    <td>{this.state.data[index].number}</td>
                    <td>{this.state.data[index].totall}</td>
                    <td>
                      <button
                        className="m-1 button button"
                        block
                        onClick={this.deleteit(index)}
                      >
                        刪除
                      </button>
                      <button
                        className="m-1 button button"
                        block
                        onClick={this.goto(this.state.data[index].sid)}
                      >
                        詳細資料
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </>
    )
  }
}

export default product_order
