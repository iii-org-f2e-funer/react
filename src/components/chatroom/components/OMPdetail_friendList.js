import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import '../../../styles/chatroom/openMemberPage.scss'
class OMPdetail_friendList extends React.Component {
  constructor() {
    super()
    this.state = {
      nickName: '',
      age: 0,
      gender: '',
      location: '',
      game: [],
      about: '',
      FriendData: '',
      toID: '',
    }
  }
  componentDidMount() {
    let theUrl = this.props.location.pathname
    console.log(theUrl.split('/'))
    var toID = theUrl.split('/')[theUrl.split('/').length - 1].replace('ID', '')
    this.setState({ toID: toID })
    fetch('http://13.112.90.13:3002/chatroom/openMemberPage/' + toID, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(res => {
        return res.json()
      })
      .then(obj => {
        var gameName = [
          '紙牌遊戲',
          '骰子遊戲',
          '合作遊戲',
          '派對遊戲',
          '陣營遊戲',
          '猜心遊戲',
          '輕策略遊戲',
          '中策略遊戲',
          '重策略遊戲',
          '大腦遊戲',
          '言語遊戲',
          '巧手遊戲',
          '競速遊戲',
          '兒童遊戲',
          '闔家遊戲',
        ]
        var specialtyGame = []
        var theGame = []
        for (let k in obj[0]) {
          theGame = [...theGame, obj[0][k]]
        }
        theGame.splice(0, 1)
        console.log(theGame)
        theGame.filter((ele, ind) => {
          if (ele == 1) {
            specialtyGame = [...specialtyGame, gameName[ind]]
          }
        })
        console.log(specialtyGame)
        console.log(obj)
        this.setState({
          nickName: obj[1].nickname,
          age: obj[1].birthday,
          gender: obj[1].gender,
          location: obj[1].location,
          about: obj[1].about,
          game: specialtyGame,
        })
      })
    //fetch status

    fetch(
      `http://13.112.90.13:3002/chatroom/friendList/${this.props.logInId}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
      .then(response => {
        return response.json()
      })
      .then(data => {
        //過濾掉delete的好友
        let noDeleteData = data[0].filter(ele => {
          return ele.status !== 'delete'
        })

        console.log('FriendData:', data)
        console.log('noDeleteFriendData:', noDeleteData)

        let checkFriend = noDeleteData.filter((ele, ind, arr) => {
          return ele.user_id == toID || ele.friend_id == toID
          // return ele.friendID == toID && (ele.status == 'approve' || 'review')
        })
        this.setState({ FriendData: checkFriend })
        console.log(checkFriend)
      })
  }
  startChat = () => {}

  render() {
    if (!this.state.FriendData) {
      return null
    }
    return (
      <div className="OMPdetail">
        <h5>會員資料</h5>
        <hr />
        <div className="memberDetail pl-3">
          <div className="row mb-3">
            <label className="col-md-2">暱稱</label>
            <div className="col-md-8">
              {this.state.nickName == '' ? '未公開' : this.state.nickName}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">年紀</label>
            <div className="col-md-8">{this.state.age}</div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">性別</label>
            <div className="col-md-8">
              {this.state.gender == 'F' ? '女生' : '男生'}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">地區</label>
            <div className="col-md-8">{this.state.location}</div>
          </div>
          <div className="row mb-3">
            <label className="col-md-2">擅長遊戲</label>
            <div className="col-md-8 d-flex align-items-center">
              {this.state.game.map((ele, ind) => {
                return (
                  <span key={ind} className="mr-2">
                    {ele}
                  </span>
                )
              })}
            </div>
          </div>
          <div className="row mt-4 d-flex flex-column aboutMe">
            <div className="pb-3 me">關於我</div>

            <p className="col-md-11 mt-3">
              {this.state.about == '' ? '未公開' : this.state.about}
            </p>
          </div>

          <div className="d-none">
            {this.props.url}+{this.props.refreshID}
          </div>

          <div
            className={
              this.state.FriendData[0].status == 'approve'
                ? 'friendAction mx-auto text-center mt-3'
                : 'd-none'
            }
          >
            <NavLink
              className={'startChat col-md text-center mx-auto button'}
              to={
                '/chatroom/message/' +
                'ID' +
                this.props.logInId +
                '/' +
                'ID' +
                this.state.toID
              }
              onClick={this.startChat}
            >
              <i className="far fa-comment-dots" />
              <span> 開始聊聊</span>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OMPdetail_friendList)
