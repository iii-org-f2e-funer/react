import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Pt_editmodal extends React.Component {
  constructor(props) {
    super(props)
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
            <div className="ptmodal">
              {!this.props.edited.success ? (
                <>
                  <div className="msgcol">
                    <div>{this.props.edited.errormsg}</div>
                  </div>
                  <div className="btncol">
                    <Link to={'/event/'}>
                      <button onClick={this.props.handleHide}>確認</button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="msgcol">
                    <div>你的修改已成功</div>
                  </div>
                  <div className="btncol">
                    <Link to={'/event/'}>
                      <button onClick={this.props.handleHide}>
                        回揪團列表
                      </button>
                    </Link>
                    <Link to={'/member/userevent'}>
                      <button onClick={this.props.handleHide}>回個人頁</button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </>
        </Modal>
      </>
    )
  }
}

export default Pt_editmodal
