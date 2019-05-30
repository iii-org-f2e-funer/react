import React from 'react'
import { Button, Table } from 'react-bootstrap'

const Site_order = () => {
  return (
    <>
      <div className="myfav-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th />
              <th>圖片</th>
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
                <td />
                <td>{this.state.data[index].productName}</td>
                <td>{this.state.data[index].seller_sid}</td>
                <td>{this.state.data[index].price}</td>
                <td>{this.state.data[index].number}</td>
                <td>{this.state.data[index].totall}</td>
                <td>
                  <Button
                    className="m-1 button button"
                    block
                    onClick={this.deleteit(index)}
                  >
                    刪除
                  </Button>
                  <Button
                    className="m-1 button button"
                    block
                    onClick={this.goto(this.state.data[index].sid)}
                  >
                    detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Site_order
