import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'
import Pt_listitem from './Pt_listitem'

export class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(item => (
      <Pt_listitem key={item.pt_sid} data={item} />
    ))

    return (
      <div id="project-comments" className="commentList">
        {commentNodes}
      </div>
    )
  }
}

export class Pt_listpaginate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      offset: 0,
      perPage: 16,
    }
  }

  loadCommentsFromServer() {
    let a = JSON.stringify({
      offset: this.state.offset,
      limit: this.state.perPage,
    })
    console.log(a)
    fetch('//localhost:3002/event/ptlist', {
      method: 'POST',
      body: a,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        this.setState({
          data: obj.items,
          pageCount: Math.ceil(obj.meta.total_count / obj.meta.limit),
        })
      })
  }

  componentDidMount() {
    this.loadCommentsFromServer()
  }

  handlePageClick = data => {
    let selected = data.selected
    let offset = Math.ceil(selected * this.state.perPage)

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer()
    })
  }

  render() {
    return (
      <>
        <CommentList data={this.state.data} />
        <ReactPaginate
          previousLabel={'前一頁'}
          nextLabel={'下一頁'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </>
    )
  }
}
