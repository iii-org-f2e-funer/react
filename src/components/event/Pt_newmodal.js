import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class Pt_newmodal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.show}
          onHide={this.props.handleHide}
        >
          <>
            <div className="newmodal">
              <div>
                <h5>你的開團已成功</h5>
              </div>
              <div className="btncol">
                <button onClick={this.props.handleHide}>回揪團列表</button>
                <button onClick={this.props.handleHide}>回個人頁</button>
              </div>
            </div>
          </>
        </Modal>
      </>
    )
  }
}

export default Pt_newmodal
