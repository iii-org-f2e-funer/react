import React from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import NewProduct from './NewProduct.js'

class Product_manage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editPopup: false,
      data: [],
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({ data: obj.body })
        } else {
          this.props.history.push('/')
        }
      })
  }
  handleShow = () => {
    this.setState({ editPopup: true })
  }

  handleHide = () => {
    this.setState({ editPopup: false })
    //重新拉資料
  }

  render() {
    return (
      <>
        <h5>商品管理</h5>
        <hr />
        <div className="d-flex flex-row-reverse">
          <buton className="button mb-3 " onClick={this.handleShow}>
            <FaPlus className="mr-2" />
            新增商品
          </buton>
        </div>

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
              {/* <tbody>
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
              </tbody> */}
            </Table>
          </div>
        </div>
        <NewProduct
          editPopup={this.state.editPopup}
          handleHide={this.handleHide}
          data={this.state.data}
        />
      </>
    )
  }
}

export default Product_manage
