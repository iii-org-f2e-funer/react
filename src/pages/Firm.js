import React from 'react'
import '../styles/firm/firm.sass'
import Sidebar from '../components/firm/Sidebar'

class Firm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="container">
          <Sidebar avatarRefresh={this.props.avatarRefresh} />
        </div>
      </>
    )
  }
}

export default Firm
