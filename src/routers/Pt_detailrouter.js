import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Pt_infointro from '../components/event/Pt_infointro'
import Pt_qa from '../pages/pt_page/Pt_qa'

function Pt_detailrouter() {
  return (
    <>
      <Switch>
        <Route exact path="/event/:id" component={Pt_infointro} />
        <Route exact="/event/id/quest" component={Pt_qa} />
      </Switch>
    </>
  )
}
export default Pt_detailrouter
