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
  componentWillReceiveProps(nextProps) {
    if (this.props.avatarRefresh !== nextProps.avatarRefresh) {
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
              <Link to="/firm/account">會員中心</Link>
            </li>
            <li>
              <Link to="/firm/product_manage">商品管理</Link>
            </li>
            <li>
              <Link to="/firm/product_order">商品訂單</Link>
            </li>
            <li>
              <Link to="/firm/site_order">場地預約</Link>
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
