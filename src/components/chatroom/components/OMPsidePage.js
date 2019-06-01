import React from 'react';
import Selfie from '../avatar/girl.jpg';
class OMPsidePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="OMPsidePage">
        <div className="imgOut">
          <img src={Selfie} alt="selfie" />
        </div>
        <div className="iconDetail row  align-items-center">
          <div className="col-md text-center">
            <div>
              <i className="fas fa-dice-five" />
            </div>
            <h5>10</h5>
            <p>參團</p>
          </div>
          <div className="col-md text-center">
            <div>
              <i className="fas fa-user-friends" />
            </div>
            <h5>10</h5>
            <p>好友</p>
          </div>
        </div>
        <div className="COM_btn row mx-0 mt-2 align-items-center">
          <div className="addFriend col-md text-center mx-2 button">
            <i className="fas fa-plus" />
            <span> 加入好友</span>
          </div>
          <div className="startChat col-md text-center mx-2 button">
            <i className="far fa-comment-dots" />
            <span> 開始聊聊</span>
          </div>
        </div>
      </div>
    );
  }
}

export default OMPsidePage;
