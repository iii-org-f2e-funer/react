import React from 'react'
import { Modal } from 'react-bootstrap'

class Member_cancelapply extends React.Component {
  constructor(props) {
    super(props)

    this.state = { modalshow: false }
  }

  showmodal = e => {
    this.setState({ modalshow: true })
  }

  handleClose = e => {
    this.setState({ modalshow: false })
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
