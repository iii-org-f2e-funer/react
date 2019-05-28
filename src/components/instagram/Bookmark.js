import React from 'react'
import OldStory from './OldStory'

class Bookmark extends React.Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      storyState: [],
      isRefreshing: true,
    }
  }

  componentDidMount() {
    this.fetchAllData()
    this.timer1 = setInterval(() => {
      if (this.state.isRefreshing) {
        this.fetchAllData()
      }
    }, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.timer1)
  }
  fetchAllData = () => {
    var userID = { userId: '1' }
    var allStories = []
    var allState = []
    // fetch 所有貼文
    fetch('http://localhost:3002/instagram/allData')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        allStories = data
        // fetch 貼文狀態(favorite bookmark editable)
        return fetch('http://localhost:3002/instagram/storyState', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userID),
        })
      })
      .then(res => res.json())
      .then(data => {
        allState = data
        this.setState({ stories: allStories, storyState: allState })
      })
  }
  // 控制刷新
  handleControlRefresh = state => {
    this.setState({ isRefreshing: state })
  }
  // 強制刷新
  handleReFresh = () => {
    this.fetchAllData()
  }
  render() {
    if (this.state.storyState.length !== 0) {
      return (
        <>
          <div className="stories">
            {this.state.stories.map(item =>
              this.state.storyState[1].indexOf(item.post_id) > -1 ? (
                <OldStory
                  key={item.post_id}
                  data={item}
                  handleControlRefresh={this.handleControlRefresh}
                  handleReFresh={this.fetchAllData}
                  isFav={
                    this.state.storyState[0].indexOf(item.post_id) > -1
                      ? true
                      : false
                  }
                  isBook={
                    this.state.storyState[1].indexOf(item.post_id) > -1
                      ? true
                      : false
                  }
                  editable={
                    this.state.storyState[2].indexOf(item.post_id) > -1
                      ? true
                      : false
                  }
                />
              ) : (
                ''
              )
            )}
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="stories">
            {this.state.stories.map(item => (
              <OldStory
                key={item.post_id}
                data={item}
                handleReFresh={this.fetchAllData}
              />
            ))}
          </div>
        </>
      )
    }
  }
}
export default Bookmark
