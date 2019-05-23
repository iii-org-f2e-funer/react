import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class Pt_applymodal extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleApply = this.handleApply.bind(this)

    this.state = {
      show: false,
      applysuccess: false,
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  handleApply() {
    this.setState({ applysuccess: true })
  }
  render() {
    return (
      <>
        <button className="applybtn" onClick={this.handleShow}>
          我要參加
        </button>

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <div className="applymodal">
            {!this.state.applysuccess ? (
              <>
                <div>你是否要參加這團</div>
                <div>
                  <button onClick={this.handleClose}>取消</button>
                  <button onClick={this.handleApply}>確認</button>
                </div>
              </>
            ) : (
              <>
                <div>報名揪團成功</div>
                <div>請留意審核通知，審核通過前可以取消報名</div>
                <div>
                  提醒您報團未到容易留下差評，影響日後的審核成功的機率哦
                </div>
                <div>
                  <button onClick={this.handleClose}>確認</button>
                </div>
              </>
            )}
          </div>
        </Modal>
      </>
    )
  }
}

export default Pt_applymodal
