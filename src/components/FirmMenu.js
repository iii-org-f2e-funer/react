import React from 'react'
import { Link } from 'react-router-dom'

class FirmMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({ data: obj.body })
        } else {
          console.log('無logo')
        }
      })
  }
  render() {
    return (
      <>
        {this.props.isOpen ? (
          <ul>
            <li>
              <div className="avatar mb-2">
                <img
                  src={
                    'http://localhost:3002/images/firm/' +
                    this.state.data.my_file
                  }
                  alt="無法顯示"
                />
              </div>
            </li>
            <li>
              <Link to="/firm">會員中心</Link>
            </li>
            <li>
              <Link to="#">訂單紀錄</Link>
            </li>
            <li>
              <Link to="#">商品管理</Link>
            </li>
            <li>
              <Link to="#">場地管理</Link>
            </li>
            <hr />
            <li>
              <Link to="#" onClick={this.props.logOut}>
                登出
              </Link>
            </li>
          </ul>
        ) : (
          ''
        )}
      </>
    )
  }
}
export default FirmMenu
