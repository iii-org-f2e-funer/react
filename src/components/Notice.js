import React from 'react'
import { Link } from 'react-router-dom'

class Notice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        {this.props.isOpen ? (
          <ul>
            <li className="notice_header">通知</li>
            <li>
              <Link to="#">您有一則新通知</Link>
            </li>
            <li>
              <Link to="#">您有兩則新通知</Link>
            </li>
            <li>
              <Link to="#">您有五百則新通知</Link>
            </li>
          </ul>
        ) : (
          ''
        )}
      </>
    )
  }
}
export default Notice
