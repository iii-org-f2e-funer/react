import React from 'react'

class Site_manage extends React.Component {
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
        <h5>場地管理</h5>
        <hr />
      </>
    )
  }
}

export default Site_manage
