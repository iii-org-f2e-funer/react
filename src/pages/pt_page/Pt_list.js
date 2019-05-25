import React from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Pt_banner from '../../components/event/Pt_banner.js'
import Pt_Router from '../../routers/Pt_router'

import Pt_listitem from '../../components/event/Pt_listitem'
import { Pt_listpaginate } from '../../components/event/Pt_listpaginate'

import '../../styles/pt_style/pt_list.scss'

class Pt_list extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  // componentDidMount() {
  //   fetch('//localhost:3002/event/ptlist', {})
  //     //fetch ptlistitem
  //     .then(res => res.json())
  //     .then(obj => {
  //       console.log(obj)
  //       this.setState({ data: obj })
  //     })
  // }

  render() {
    return (
      <>
        <Pt_banner />
        <div className="ptlist_container">
          <div className="commentBox">
            {/* {this.state.data.map(item => (
            <Pt_listitem key={item.pt_sid} data={item} />
          ))} */}
            <Pt_listpaginate />
          </div>
        </div>
      </>
    )
  }
}

export default Pt_list
