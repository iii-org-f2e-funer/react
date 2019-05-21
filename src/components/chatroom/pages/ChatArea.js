import React from 'react'
// //withRouter 匯入這個方法來讓子元件可以得到ROUTER的URL屬性
import { withRouter } from 'react-router'
// const PathNow = props => <div>目前位置 {props.location.pathname}</div>;

// export default withRouter(PathNow);

function ChatArea(props) {
  return <>{props.location.pathname}</>
}

export default withRouter(ChatArea)
