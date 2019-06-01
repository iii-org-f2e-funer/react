import React from 'react'
import { Modal } from 'react-bootstrap'
import Member_applyeritem from './Member_applyeritem'

class Member_applyermodal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { modalshow: false, applyer: [] }
  }
  componentDidMount() {
    console.log(this.props.pt_sid)
    // this.setState({ pt_sid: this.props.pt_sid })

    // if (this.state.pt_sid !== '') {
    // console.log(this.state.pt_sid)
    fetch('//localhost:3002/event/ptapplyer', {
      method: 'POST',
      body: JSON.stringify({ ptsid: this.props.pt_sid }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        this.setState({ applyer: obj })
      })
    // }
  }

  showmodal = e => {
    this.setState({ modalshow: true })
  }

  handleClose = e => {
    this.setState({ modalshow: false })
  }

  handleapprove = id => e => {
    fetch('//localhost:3002/event/commit', {
      method: 'POST',
      body: JSON.stringify({
        pt_applysid: id,
        result: 'approve',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        // console.log(obj)
        alert('你已審核成功')
      })
      .then(this.refreshapplyer(id))
  }

  handlereject = id => e => {
    fetch('//localhost:3002/event/commit', {
      method: 'POST',
      body: JSON.stringify({
        pt_applysid: id,
        result: 'reject',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        // console.log(obj)
        alert('你已審核成功')
      })
      .then(this.refreshapplyer(id))
  }

  refreshapplyer = id => {
    console.log(id)
    const newapplyer = this.state.applyer.filter(element => {
      return element.pt_applysid !== id
    })
    this.setState({ applyer: newapplyer })
  }

  render() {
    // if (this.state.pt_sid !== '') {
    return (
      <>
        <button className="applyclick" id="commit" onClick={this.showmodal}>
          審核申請
        </button>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.modalshow}
          onHide={this.handleClose}
          bsPrefix="ptuse modal"
        >
          <>
            <div className="applyermodal">
              <div className="title">
                <div>待審核的報名者</div>
              </div>
              {this.state.applyer.map(item => (
                <Member_applyeritem
                  key={item.pt_applysid}
                  data={item}
                  handleapprove={this.handleapprove(item.pt_applysid)}
                  handlereject={this.handlereject(item.pt_applysid)}
                />
              ))}
            </div>
          </>
        </Modal>
      </>
    )
    //   } else {
    //     return <></>
    //   }
  }
}

export default Member_applyermodal
