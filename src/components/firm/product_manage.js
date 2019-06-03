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
      product: [],
    }
  }
  componentDidMount() {
    fetch('//13.112.90.13:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            data: obj.body,
          })
        } else {
          this.props.history.push('/')
        }
      })
    fetch('//13.112.90.13:3002/product/product_manage', { credentials: 'include' })
      //fetch order
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        console.log(jsonData)
        for (let i = 0; i < jsonData.length; i++) {
          jsonData[i].createDate = jsonData[i].createDate.slice(0, 10)
        }
        this.setState({ product: jsonData })
        // console.log(this.state.order)
      })
      .catch(err => {})
  }
  handleShow = () => {
    this.setState({ editPopup: true })
  }

  handleHide = () => {
    this.setState({ editPopup: false })

    fetch('//13.112.90.13:3002/product/product_manage', { credentials: 'include' })
      //fetch order
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        console.log(jsonData)
        for (let i = 0; i < jsonData.length; i++) {
          jsonData[i].createDate = jsonData[i].createDate.slice(0, 10)
        }
        this.setState({ product: jsonData })
        // console.log(this.state.order)
      })
      .catch(err => {})
  }

  deleteit = insid => () => {
    const data = {
      sid: insid,
    }
    fetch(`//13.112.90.13:3002/product/product_del`, {
      method: 'post',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        var newdata = this.state.product.filter(item => {
          return item.sid !== insid
        })
        this.setState({ product: newdata })
        console.log(this.state.product)
      })
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
                  <th>售價</th>
                  <th>商品總類</th>
                  <th style={{ width: '250px', textOverflow: 'ellipsis' }}>
                    描述
                  </th>
                  <th>上架日期</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {this.state.product.map((item, index, array) => (
                  <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>{item.gametype_id}</td>
                    <td>{item.description}</td>
                    <td>{item.createDate}</td>
                    <td>
                      <button
                        className="m-1 button button"
                        block
                        onClick={this.deleteit(item.sid)}
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
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
