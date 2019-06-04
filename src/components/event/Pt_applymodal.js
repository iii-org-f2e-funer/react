import React from 'react'
import { Modal } from 'react-bootstrap'
import moment from 'moment'

class Pt_applymodal extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleApply = this.handleApply.bind(this)
    this.handleClose2 = this.handleClose2.bind(this)

    this.state = {
      show: false,
      show2: false,
      applysuccess: false,
      errormsg: '',
      account: '',
    }
  }
  componentDidMount() {
    fetch('//13.112.90.13:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj.body)
        this.setState({
          account: obj.body.account,
        })
      })
  }
  handleClose() {
    this.setState({ show: false })
  }
  handleClose2() {
    this.setState({ show2: false })
    this.props.handlerender()
  }

  handleShow() {
    this.setState({ show: true })
  }

  handleApply() {
    let apply = JSON.stringify({
      hostid: this.props.ptapply.member_id,
      pt_sid: this.props.ptapply.pt_sid,
      pt_host: this.props.ptapply.pt_host,
      ptapplymem: this.state.account,
    })
    console.log(apply)
    fetch('//13.112.90.13:3002/event/apply', {
      method: 'POST',
      body: apply,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        // console.log(obj)
        if (obj.success) {
          this.setState({ applysuccess: true, show2: true, show: false })
        } else {
          this.setState({
            errormsg: obj.errormsg,
            applysuccess: false,
            show2: true,
            show: false,
          })
        }
      })
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
          <div className="ptmodal">
            <div className="msgcol">
              <div>你是否要參加 {this.props.ptapply.nickname} </div>
              <div>
                在 {this.props.ptapply.pt_city},{this.props.ptapply.pt_dist}{' '}
                {this.props.ptapply.pt_add}
              </div>
              <div>
                {moment(this.props.ptapply.pt_time).format('YYYY/MM/DD HH:mm')}{' '}
                開始的團嗎?
              </div>
            </div>
            <div className="btncol">
              <button onClick={this.handleClose}>取消</button>
              <button onClick={this.handleApply}>確認</button>
            </div>
          </div>
        </Modal>

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show2}
          onHide={this.handleClose}
        >
          <div className="ptmodal">
            {!this.state.applysuccess ? (
              <>
                <div className="msgcol">
                  <div>{this.state.errormsg}</div>
                </div>
                <div className="btncol">
                  <button onClick={this.handleClose2}>確認</button>
                </div>
              </>
            ) : (
              <>
                <div className="msgcol">
                  <div>報名揪團成功</div>
                  <div>請留意審核通知，審核通過前可以取消報名</div>
                  <div>
                    提醒您報團未到容易留下差評，影響日後的審核成功的機率哦
                  </div>
                </div>
                <div className="btncol">
                  <button onClick={this.handleClose2}>確認</button>
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
