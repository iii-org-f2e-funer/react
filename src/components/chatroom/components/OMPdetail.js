import React from 'react';

class OMPdetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="OMPdetail">
        <h5>會員資料</h5>
        <hr />
        <div className="memberDetail pl-3">
          <div className="row mb-3">
            <label className="col-md-2">暱稱</label>
            <div className="col-md-8">123</div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">年紀</label>
            <div className="col-md-8">123</div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">性別</label>
            <div className="col-md-8">123</div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">地區</label>
            <div className="col-md-8">123</div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">擅長遊戲</label>
            <div className="col-md-8">123</div>
          </div>
          <div className="row mb-3 d-flex flex-column aboutMe">
            <label className="col-md-2">關於我</label>
            <div className="col-md-8 mt-3">123</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OMPdetail;
