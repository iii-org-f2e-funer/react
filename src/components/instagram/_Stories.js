import React from 'react'
import NewStory from './NewStory'
import OldStory from './OldStory'

class Stories extends React.Component {
  constructor() {
    super()
    this.state = {
      stories: [],
    }
  }
  componentDidMount() {
    this.fetchStories()
  }
  fetchStories = () => {
    // fetch('http://localhost:3002/instagram/getStories')
    fetch('http://localhost:3002/instagram/allData')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ stories: data })
      })
  }
  handleReFresh = () => {
    this.fetchStories()
  }
  render() {
    return (
      <>
        <div className="stories">
          <NewStory handleReFresh={this.handleReFresh} />
          {this.state.stories.map(item => (
            <OldStory key={item.post_id} data={item} />
          ))}
        </div>
      </>
    )
  }
}
export default Stories
