import { BrowserRouter as Route, Switch } from 'react-router-dom'
import React from 'react'
import Pt_infointro from '../components/event/Pt_infointro'
import Pt_qa from '../pages/pt_page/Pt_qa'

function Pt_detailrouter(props) {
  return (
    <>
      <Switch>
        <Route path="/quest" component={Pt_qa} />
        <Route path="/" component={Pt_infointro} />
      </Switch>
    </>
  )
}
export default Pt_detailrouter
