import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Pt_list from './Pt_list'
import Pt_new from './Pt_new'
import Pt_detail from './Pt_detail'
import Pt_edit from './Pt_edit'
import Member_applyedpt from '../../components/event/Member_applyedpt'

const Event = () => {
  return (
    <>
      <Switch>
        <Route path="/event/test" component={Member_applyedpt} />
        <Route path="/event/new" component={Pt_new} />
        <Route path="/event/edit/:id" component={Pt_edit} />
        <Route path="/event/info/:id" component={Pt_detail} />
        <Route path="/event/" component={Pt_list} />
      </Switch>
    </>
  )
}

export default Event
