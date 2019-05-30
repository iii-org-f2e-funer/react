import React from 'react'
import { Link } from 'react-router-dom'
class InstagramSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pointer: 0,
    }
  }
  // 按上一個
  handlePrevClick = () => {
    this.setState({ pointer: this.state.pointer - 1 })
  }
  // 按下一個
  handleNextClick = () => {
    this.setState({ pointer: this.state.pointer + 1 })
  }
  componentDidMount() {
    // this.props.events
  }
  render() {
    return (
      <>
        <div className="instagram_slider" />
      </>
    )
  }
}
export default InstagramSlider
