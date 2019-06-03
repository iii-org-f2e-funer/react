import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'
import Pt_listitem from './Pt_listitem'
import Pt_listsearch from './Pt_listsearch'

export class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(item => (
      <Pt_listitem key={item.pt_sid} data={item} />
    ))

    return (
      <div id="project-comments" className="commentList">
        {this.props.data.length !== 0 ? (
          <> {commentNodes} </>
        ) : (
          <>
            <div className="noresult">你的搜尋條件沒有符合的結果</div>
          </>
        )}
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
      searchterm: '',
      searchcity: '',
      searchdist: '',
      searchstarttime: '',
      searchendtime: '',
      searchlevel: '',
    }
  }

  loadCommentsFromServer = () => {
    // console.log('here')
    let a = JSON.stringify({
      offset: this.state.offset,
      limit: this.state.perPage,
      searchterm: this.state.searchterm,
      searchcity: this.state.searchcity,
      searchdist: this.state.searchdist,
      searchstarttime: this.state.searchstarttime,
      searchendtime: this.state.searchendtime,
      searchlevel: this.state.searchlevel,
    })
    // console.log(a)
    fetch('//13.112.90.13:3002/event/ptlist', {
      method: 'POST',
      body: a,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        // console.log(obj.items)
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

  handletermchange = e => {
    this.setState({ searchterm: e.target.value })
  }
  handlecityChange = e => {
    this.setState({ searchcity: e.county }, () => {
      this.loadCommentsFromServer()
    })
  }
  handledistChange = e => {
    this.setState({ searchdist: e.district }, () => {
      this.loadCommentsFromServer()
    })
  }
  handlestarttimeChange = moment => {
    this.setState({ searchstarttime: moment.toDate() }, () => {
      this.loadCommentsFromServer()
    })
  }
  handleendtimeChange = moment => {
    this.setState({ searchendtime: moment.toDate() }, () => {
      this.loadCommentsFromServer()
    })
  }
  handlelevelchange = e => {
    this.setState({ searchlevel: e.target.value }, () => {
      this.loadCommentsFromServer()
    })
  }

  handleclear = e => {
    this.setState(
      {
        searchterm: '',
        searchcity: '',
        searchdist: '',
        searchstarttime: '',
        searchendtime: '',
        searchlevel: '',
      },
      () => {
        this.loadCommentsFromServer()
      }
    )
  }
  render() {
    return (
      <>
        <Pt_listsearch
          changeterm={this.handletermchange}
          term={this.state.searchterm}
          chanegecity={this.handlecityChange}
          chanegedist={this.handledistChange}
          city={this.state.searchcity}
          dist={this.state.searchdist}
          changestarttime={this.handlestarttimeChange}
          changeendtime={this.handleendtimeChange}
          starttime={this.state.searchstarttime}
          endtime={this.state.searchendtime}
          level={this.state.searchlevel}
          changelevel={this.handlelevelchange}
          clear={this.handleclear}
          search={this.loadCommentsFromServer}
        />
        <CommentList data={this.state.data} />
        <ReactPaginate
          previousLabel={<i class="fas fa-chevron-left" />}
          nextLabel={<i class="fas fa-chevron-right" />}
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
