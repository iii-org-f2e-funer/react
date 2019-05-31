import React from 'react'

class Product_manage extends React.Component {
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
        <h5>商品管理</h5>
        <hr />
      </>
    )
  }
}

export default Product_manage
