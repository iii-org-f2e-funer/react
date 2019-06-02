import React from 'react'
import { Table } from 'react-bootstrap'

class product_order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      data: [],
      firm_sid: 99,
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/product/firm_order', { credentials: 'include' })
      //fetch order
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        // this.setState({ orderall: jsonData })
        console.log(jsonData)
        // var aaa = this.state.orderall.length
        // var gotit = []
        // for (let i = 0; i < aaa; i++) {
        //   if (this.state.orderall[i].seller == this.state.firm_sid) {
        //     gotit.push(this.state.orderall[i])
        //   }
        // }
        // this.setState({ data: gotit })
      })
      .catch(err => {
        // console.log('錯誤:', err)
      })
  }
  render() {
    return (
      <>
        <h5>商品訂單紀錄</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5" />
        </div>
      </>
    )
  }
}

export default product_order
