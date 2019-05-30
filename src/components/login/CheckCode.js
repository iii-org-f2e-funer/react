import React from 'react'
import queryString from 'query-string'

class CheckCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islive: '',
    }
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    const code = values.code
    console.log(code)
    const data = { code: code }
    fetch('//localhost:3002/firm/checkCode', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        if (obj.success) {
          this.setState({ islive: true })
        } else {
        }
      })
  }
  render() {
    return <>{this.state.islive ? <p>激活成功</p> : <p>激活失敗</p>}</>
  }
}

export default CheckCode
