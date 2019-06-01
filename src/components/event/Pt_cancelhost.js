import React from 'react'
import { Modal } from 'react-bootstrap'

class Pt_cancelhost extends React.Component {
  constructor(props) {
    super(props)

    this.state = { cancelmodalshow: false }
  }

  showcancelmodal = e => {
    e.preventDefault()
    this.setState({ cancelmodalshow: true })

    console.log(this.props.pt_sid)
    fetch('//localhost:3002/event/cancelhost', {
      method: 'POST',
      body: JSON.stringify({ pt_sid: this.props.pt_sid }),
      headers: {
        'Content-type': 'application/json',
      },
    })
  }

  handleClose = e => {
    this.props.history.push('/event')
    this.setState({ cancelmodalshow: false })
  }

  render() {
    return (
      <>
        <button className="pt_submitbtn" onClick={this.showcancelmodal}>
          取消揪團
        </button>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.cancelmodalshow}
          onHide={this.handleClose}
        >
          <>
            <div className="ptmodal">
              <div className="msgcol">
                <div>你已解散這個揪團</div>
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

export default Pt_cancelhost
