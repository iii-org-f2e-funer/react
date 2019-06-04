import React from 'react'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import TWzipcode from 'react-twzipcode'
import { FaRegImage, FaTrashAlt } from 'react-icons/fa'

class NewProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allGameType: [],
      preViewImgs: [],
      productName: '',
      type: '',
      price: '',
      description: '',
    }
  }
  componentDidMount() {
    fetch('//13.112.90.13:3002/product/game_type', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        this.setState({ allGameType: obj })
      })
  }

  // 新增圖片
  handleFilesChange = event => {
    const files = event.target.files
    var _this = this
    let preViewImgs = [] // 建立新陣列

    for (let i = 0; i < files.length; i++) {
      var reader = new FileReader()
      reader.readAsDataURL(files[i]) //read file data as a base64 encoded string.
      // reader loaded
      reader.addEventListener('load', function(e) {
        preViewImgs.push(e.target.result)
        _this.setState({ preViewImgs: preViewImgs })
      })
    }
  }
  insertProduct = () => {
    const data = {
      seller_id: this.props.data.sid,
      productName: this.state.productName,
      gametype_id: this.state.type,
      price: this.state.price,
      description: this.state.description,
    }
    var fd = new FormData()
    Object.keys(data).forEach(key => fd.append(key, data[key]))
    for (let i = 0; i < this.fileInput.files.length; i++) {
      fd.append('files', this.fileInput.files[i])
    }
    fetch('//13.112.90.13:3002/firm/insertProduct', {
      method: 'POST',
      body: fd,
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.props.handleHide()
        } else {
          this.props.handleHide()
        }
      })
  }

  render() {
    return (
      <>
        <Modal
          className="firmEdit"
          show={this.props.editPopup}
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <h4 className="text-center mb-3">商品上架</h4>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                店家名稱
              </Form.Label>
              <Col sm={10}>
                <p className="d-flex align-items-center">
                  {this.props.data.firmname}
                </p>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                商品名稱
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  value={this.state.store}
                  onChange={e => this.setState({ productName: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                商品分類
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  as="select"
                  onChange={e => this.setState({ type: e.target.value })}
                >
                  {this.state.allGameType ? (
                    this.state.allGameType.map((item, i) => (
                      <option key={i} value={item.type_id}>
                        {item.type_name}
                      </option>
                    ))
                  ) : (
                    <>
                      <option selected>請選擇分類</option>
                      <option value="1">紙牌遊戲</option>
                      <option value="2">骰子遊戲</option>
                      <option value="3">合作遊戲</option>
                      <option value="4">派對遊戲</option>
                      <option value="5">陣營遊戲</option>
                      <option value="6">猜心遊戲</option>
                      <option value="7">輕策略遊戲</option>
                      <option value="8">中策略遊戲</option>
                      <option value="9">重策略遊戲</option>
                      <option value="10">大腦遊戲</option>
                      <option value="11">言語遊戲</option>
                      <option value="12">巧手遊戲</option>
                      <option value="13">競速遊戲</option>
                      <option value="14">兒童遊戲</option>
                      <option value="15">闔家遊戲</option>
                    </>
                  )}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                售價
              </Form.Label>
              <Col sm={3} className="d-flex">
                <Form.Control
                  type="number"
                  value={this.state.phone}
                  onChange={e => this.setState({ price: e.target.value })}
                />
                <p>元</p>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                產品說明
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows="18"
                  value={this.state.business_hours}
                  onChange={e => this.setState({ description: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                店家照片
              </Form.Label>
              <Col sm={10}>
                <label className="img_icon" htmlFor="myFile">
                  <FaRegImage />
                </label>
                <input
                  multiple
                  id="myFile"
                  type="file"
                  style={{ display: 'none' }}
                  ref={el => (this.fileInput = el)}
                  onChange={this.handleFilesChange}
                />
                <div className="post-image">
                  {/* <img src={process.env.PUBLIC_URL + '/images/instagram/avatar.png'} alt="" /> */}
                  {this.state.preViewImgs.map((item, idx) => (
                    <img key={idx} src={item} alt="" />
                  ))}
                </div>
              </Col>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <div className="button mt-3 mr-3" onClick={this.insertProduct}>
                確認更改
              </div>
              <div
                className="button button-white mt-3"
                onClick={this.props.handleHide}
              >
                取消變更
              </div>
            </div>
          </Form>
        </Modal>
      </>
    )
  }
}

export default NewProduct
