import React from 'react'
import { Button, Table } from 'react-bootstrap'

class Site_order extends React.Component {
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
        <h5>場地訂單</h5>
        <hr />
      </>
    )
  }
}

export default Site_order
