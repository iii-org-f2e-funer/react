import React from 'react'
import { Modal } from 'react-bootstrap'

class Member_cancelapply extends React.Component {
  constructor(props) {
    super(props)

    this.state = { modalshow: false }
  }

  showmodal = e => {
    console.log(this.props.applysid)
    fetch('//13.112.90.13:3002/event/cancelapply', {
      method: 'POST',
      body: JSON.stringify({ applysid: this.props.applysid }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    this.setState({ modalshow: true })
  }

  handleClose = e => {
    this.setState({ modalshow: false })
    console.log(this.props.applysid)
    this.props.cancel(this.props.applysid)
  }

  render() {
    return (
      <>
        <button className="applyclick" onClick={this.showmodal}>
          退出揪團
        </button>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.modalshow}
          onHide={this.handleClose}
        >
          <>
            <div className="ptmodal">
              <div className="msgcol">
                <div>你已退出這個揪團</div>
              </div>
              <div className="btncol">
                <button onClick={this.handleClose}>確認</button>
              </div>
            </div>
          </>
        </Modal>
      </>
    )
  }
}

export default Member_cancelapply
