import React from 'react'
import { Modal } from 'react-bootstrap'
import Member_applyeritem from './Member_applyeritem'

class Member_applyermodal extends React.Component {
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
          審核申請
        </button>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.modalshow}
          onHide={this.handleClose}
        >
          <>
            <div className="applyermodal">
              <div className="title">
                <div>待審核的報名者</div>
              </div>
              <Member_applyeritem />
            </div>
          </>
        </Modal>
      </>
    )
  }
}

export default Member_applyermodal
