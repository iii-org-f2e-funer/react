import React from 'react'
import '../../styles/pt_style/pt_new.scss'
import Datetime from 'react-datetime'
import moment from 'moment'
import TWzipcode from 'react-twzipcode'
// import Pt_imgupload from '../../components/event/Pt_imgupload'
import Pt_editmodal from '../../components/event/Pt_editmodal'
import Pt_cancelhost from '../../components/event/Pt_cancelhost'

class Pt_edit extends React.Component {
  constructor() {
    super()
    this.state = {
      pt_img: '',
      pt_host: '',
      pt_city: '',
      pt_dist: '',
      pt_add: '',
      pt_time: moment().add(7, 'days'),
      pt_endtime: moment().add(5, 'days'),
      pt_member: 2,
      pt_maxm: 3,
      pt_level: '',
      pt_title: '',
      pt_info: '',
      editmodalshow: false,
      locatefirm: [],
      editsuccess: [],
    }
  }
  componentDidMount() {
    let data = JSON.stringify({ ptsid: window.location.pathname.split('/')[3] })

    fetch('//13.112.90.13:3002/event/ptinfo', {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        this.setState({
          pt_img: obj.pt_img,
          pt_sid: obj.pt_sid,
          pt_host: obj.host,
          pt_city: obj.pt_city,
          pt_dist: obj.pt_dist,
          pt_add: obj.pt_add,
          pt_time: moment(obj.pt_time),
          pt_endtime: moment(obj.pt_endtime),
          pt_member: obj.pt_member,
          pt_maxm: obj.pt_maxm,
          pt_level: obj.pt_level,
          pt_title: obj.pt_title,
          pt_info: obj.pt_info,
        })
      })
  }

  //handler
  handlememberChange = event => {
    this.setState({
      pt_member: event.target.value,
    })
  }
  handlemaxmChange = event => {
    this.setState({
      pt_maxm: event.target.value,
    })
  }
  handletimeChange = moment => this.setState({ pt_time: moment.toDate() })
  handleendtimeChange = moment => this.setState({ pt_endtime: moment.toDate() })
  handlelevelChange = event => {
    this.setState({
      pt_level: event.target.value,
    })
  }

  //上傳圖片
  handleuploadimg = e => {
    this.refs.fileUploader.click()
  }

  handleimgChange = e => {
    if (e.target.files.length !== 0) {
      const imgfile = e.target.files[0]
      // this.setState({ imgdata: imgfile })
      console.log(imgfile)
      const imgdata = new FormData()
      imgdata.append('pt_img', imgfile)
      console.log(imgdata)

      fetch('//13.112.90.13:3002/event/imgupload', {
        method: 'POST',
        body: imgdata,
      })
        .then(res => res.json())
        .then(obj => {
          console.log(obj)
          this.setState({ pt_img: obj.filepath })
        })
        .then()
    }
  }

  //設定地址
  handlecityChange = e =>
    this.setState({
      pt_city: e.county,
    })
  handledistChange = e => {
    this.setState({
      pt_dist: e.district,
    })
    if (this.state.pt_city !== '' && this.state.pt_dist !== '') {
      let locate = JSON.stringify({
        pt_city: this.state.pt_city,
        pt_dist: this.state.pt_dist,
      })
      fetch('//13.112.90.13:3002/event/loadadd', {
        method: 'POST',
        body: locate,
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(obj => {
          this.setState({ locatefirm: obj })
        })
    }
  }

  handleaddChange = event => {
    this.setState({
      pt_add: event.target.value,
    })
  }
  handletitleChange = event => {
    this.setState({
      pt_title: event.target.value,
    })
  }
  handleinfoChange = event => {
    this.setState({
      pt_info: event.target.value,
    })
  }

  //送出修改
  handleformsubmit = e => {
    e.preventDefault()

    const fd = new FormData(this.form)

    fetch('//13.112.90.13:3002/event/editpt', {
      method: 'POST',
      body: fd,
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        this.setState({ editsuccess: obj, editmodalshow: true })
      })
  }

  handleClose = e => {
    this.setState({ editmodalshow: false })
  }

  render() {
    return (
      <>
        <div className="pt_container">
          <form
            name="newptform"
            className="ptform"
            method="post"
            onSubmit={this.handleformsubmit}
            ref={el => (this.form = el)}
          >
            <input type="hidden" name="check" value="happy6" />
            <div className="form-row title">
              <h3>編輯你的揪團</h3>
            </div>
            <input type="hidden" name="pt_host" value={this.state.pt_host} />
            <input type="hidden" name="pt_sid" value={this.state.pt_sid} />
            <div className="form-row">
              <label for="pt_imgfile">桌遊封面</label>
              <input
                type="hidden"
                id="pt_img"
                name="pt_img"
                value={this.state.pt_img}
              />
              <input
                type="file"
                id="pt_imgfile"
                ref="fileUploader"
                accept="image/jpeg,.png"
                onChange={this.handleimgChange}
                style={{ display: 'none' }}
              />
              <div className="imgfield">
                {this.state.pt_img ? (
                  <div className="imgpreview" onClick={this.handleuploadimg}>
                    <img
                      src={'//13.112.90.13:3002/images/event/' + this.state.pt_img}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="pt_imgupload" onClick={this.handleuploadimg}>
                    <i className="fas fa-camera" />
                  </div>
                )}
              </div>
            </div>

            <div className="form-row">
              <label for="pt_locate">地點</label>
              <TWzipcode
                countyFieldName="pt_city"
                districtFieldName="pt_dist"
                countyValue={this.state.pt_city}
                districtValue={this.state.pt_dist}
                css={[
                  'form-control county-sel',
                  'form-control district-sel',
                  'form-control zipcode',
                ]}
                handleChangeCounty={this.handlecityChange}
                handleChangeDistrict={this.handledistChange}
              />
              <input
                id="pt_add"
                name="pt_add"
                list="addlist"
                placeholder="地址/店家名稱"
                value={this.state.add}
                // onClick={e => this.handleloadadd(e)}
                onChange={event => this.handleaddChange(event)}
              />
              <datalist id="addlist">
                {this.state.locatefirm.map(item => (
                  <option key={item.sid} value={item.firmname} />
                ))}
              </datalist>
            </div>
            <div className="form-row">
              <label for="pt_time">桌遊時間</label>
              <Datetime
                className="flex"
                dateFormat="YYYY/MM/DD"
                timeFormat="HH:mm"
                value={this.state.pt_time}
                inputProps={{ name: 'pt_time' }}
                onChange={moment => this.handletimeChange(moment)}
              />
            </div>

            <div className="form-row">
              <label for="pt_endtime">審核截止時間</label>
              <Datetime
                className="flex"
                dateFormat="YYYY/MM/DD"
                timeFormat="HH:mm"
                value={this.state.pt_endtime}
                inputProps={{ name: 'pt_endtime' }}
                onChange={moment => this.handleendtimeChange(moment)}
              />
            </div>
            <div className="form-row">
              <label for="pt_member">成團人數</label>
              <input
                type="number"
                min="1"
                id="pt_member"
                name="pt_member"
                value={this.state.pt_member}
                onChange={event => this.handlememberChange(event)}
              />
            </div>
            <div className="form-row">
              <label for="pt_maxm">上限人數</label>
              <input
                type="number"
                min="1"
                id="pt_maxm"
                name="pt_maxm"
                value={this.state.pt_maxm}
                onChange={event => this.handlemaxmChange(event)}
              />
            </div>
            <div className="form-row" id="pt_level">
              <label for="pt_level">遊戲難度</label>
              <input
                className="pt_level"
                type="radio"
                name="pt_level"
                value="easy"
                checked={this.state.pt_level === 'easy'}
                onChange={event => this.handlelevelChange(event)}
              />
              <span> 適合新手 </span>
              <input
                className="pt_level"
                type="radio"
                name="pt_level"
                value="normal"
                checked={this.state.pt_level === 'normal'}
                onChange={event => this.handlelevelChange(event)}
              />
              <span>適合已有基礎的玩家</span>
              <input
                className="pt_level"
                type="radio"
                name="pt_level"
                value="hard"
                checked={this.state.pt_level === 'hard'}
                onChange={event => this.handlelevelChange(event)}
              />
              <span>高難度重度策略</span>
            </div>
            <div className="form-row">
              <label for="pt_title">開團標題</label>
              <input
                type="text"
                id="pt_title"
                name="pt_title"
                placeholder="請輸入你的桌遊標題"
                value={this.state.pt_title}
                onChange={event => this.handletitleChange(event)}
              />
            </div>
            <div className="form-row">
              <label for="pt_info">詳細描述</label>
              <textarea
                id="pt_info"
                name="pt_info"
                rows="20"
                placeholder="增加一些描述讓你的團吸引其他人加入吧"
                value={this.state.pt_info}
                onChange={event => this.handleinfoChange(event)}
              />
            </div>
            <div className="form-row btncol">
              <Pt_cancelhost pt_sid={this.state.pt_sid} />
              <button type="submit" className="pt_submitbtn">
                確認修改
              </button>
              <Pt_editmodal
                show={this.state.editmodalshow}
                handleHide={this.handleClose}
                edited={this.state.editsuccess}
              />
            </div>
            <div className="form-row remind">
              *您的揪團將會刊登在列表上，並於時間截止後下架，請記得在最晚審核時間勾選申請人哦!
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Pt_edit
