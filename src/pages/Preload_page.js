import React from 'react'
import '../styles/preload.sass'
import { Animated } from 'react-animated-css'

class Preload_page extends React.Component {
  constructor() {
    super()
    this.state = {
      colorShow: true,
      whiteShow: false,
      yellow_circle: true,
      screen_circle: false,
      preload_page: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ whiteShow: true })
    }, 1000)
    setTimeout(() => {
      this.setState({ colorShow: false })
    }, 1700)
    setTimeout(() => {
      this.setState({ whiteShow: false })
    }, 2000)
    setTimeout(() => {
      this.setState({
        yellow_circle: false,

        preload_page: false,
      })
    }, 2400)
    setTimeout(() => {
      this.setState({
        screen_circle: true,
      })
    }, 2000)
  }

  render() {
    return (
      <>
        {this.state.screen_circle ? (
          <>
            <div className="white_screen">
              <div className="screen_circle circle1" />
              <div className="screen_circle circle2" />
              <div className="screen_circle circle3" />
            </div>
          </>
        ) : (
          ''
        )}
        {this.state.preload_page ? (
          <div className="preload_page d-flex justify-content-center align-items-center">
            {this.state.yellow_circle ? <div className="yellow" /> : ''}
            {this.state.colorShow ? (
              <div className="color_funer">
                <Animated
                  duration="600"
                  animationIn="bounceInDown"
                  animationInDuration={800}
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="996.798"
                    height="240"
                    viewBox="0 0 996.798 240"
                  >
                    <g
                      id="Group_624"
                      data-name="Group 624"
                      transform="translate(-314 -599)"
                    >
                      <path
                        id="funer"
                        d="M156.52-165.84q-.952,14.921-1.746,29.524t-2.063,29.524l-67.3,3.492v20h58.413l-3.175,49.206L85.092-32.507l.317,93.968L5.092,63.049,10.171-165.84Zm206.063,52.381q0,11.746-1.111,25.873t-3.65,29.206q-2.54,15.079-6.587,30.556a218.6,218.6,0,0,1-10.08,29.762,175.455,175.455,0,0,1-14.048,26.746A105.4,105.4,0,0,1,308.7,50.43a81.329,81.329,0,0,1-23.254,14.6,74.085,74.085,0,0,1-28.571,5.317q-18.413,0-31.984-5.952a71.849,71.849,0,0,1-23.254-16.032,85.02,85.02,0,0,1-15.873-23.492,147.3,147.3,0,0,1-9.683-28.413,217.352,217.352,0,0,1-4.841-30.635q-1.349-15.635-1.349-30.079a444.014,444.014,0,0,1,2.222-44.365q2.222-22.143,6.349-44.206l74.286,2.857q-4.286,24.921-7.381,50.079a413.636,413.636,0,0,0-3.1,50.556q0,2.7.238,8.016t.873,11.9q.635,6.587,1.825,13.492A74.365,74.365,0,0,0,248.457-3.3a32.426,32.426,0,0,0,5,9.365,8.667,8.667,0,0,0,6.9,3.651q4.6,0,8.254-4.365A40.675,40.675,0,0,0,275.04-6.316a117.626,117.626,0,0,0,4.841-16.825q2.063-9.524,3.492-19.841t2.3-20.635q.873-10.317,1.429-19.206t.714-15.714q.159-6.825.159-10.159,0-12.381-.4-24.683t-1.19-24.524h74.286q1.913,21.9,1.913,44.444Zm236.7-51.111L587.854,50.668l-83.175,7.619L460.235-56.951l-6.984,117.46H381.822l5.714-225.079,79.365-3.81L521.822-54.094l2.54-107.936ZM797.409-65.2a201.865,201.865,0,0,1-1.9,27.6q-27.146,1.768-53.97,5.65t-53.651,7.7A39.4,39.4,0,0,0,700.822-6,33.321,33.321,0,0,0,721.854.827a46.4,46.4,0,0,0,13.889-2.381,114.779,114.779,0,0,0,15-5.952q7.46-3.571,14.286-7.7t11.746-7.46L769.155,49.4a70.1,70.1,0,0,1-13.413,8.1,92.049,92.049,0,0,1-15,5.4,114.326,114.326,0,0,1-15.714,3.016,130.515,130.515,0,0,1-15.555.952,91.456,91.456,0,0,1-28.73-4.286A84.608,84.608,0,0,1,657.172,50.6,88.54,88.54,0,0,1,638.68,32.423,106.214,106.214,0,0,1,625.5,9.557a131.958,131.958,0,0,1-7.937-26.19,145.336,145.336,0,0,1-2.7-27.937,163.877,163.877,0,0,1,2.7-29.524,147.2,147.2,0,0,1,8.175-28.413,120.67,120.67,0,0,1,13.81-25.317A98.862,98.862,0,0,1,659-148.221a86.844,86.844,0,0,1,25.159-13.651,93.344,93.344,0,0,1,31.032-4.921,81.2,81.2,0,0,1,25.794,3.889,71.8,71.8,0,0,1,20.794,10.794,74.312,74.312,0,0,1,15.873,16.429,94.821,94.821,0,0,1,11.111,20.873,124.777,124.777,0,0,1,6.508,23.968,152.848,152.848,0,0,1,2.138,25.64Zm-63.492-8.254a45.742,45.742,0,0,0-.952-9.127,28.979,28.979,0,0,0-3.1-8.492,18.885,18.885,0,0,0-5.635-6.27,14.788,14.788,0,0,0-8.73-2.46,18.932,18.932,0,0,0-11.19,3.413,32.977,32.977,0,0,0-8.333,8.571,51.852,51.852,0,0,0-5.714,11.19,84.977,84.977,0,0,0-3.333,11.111l46.984-4.444Zm267.968-16.508a108.294,108.294,0,0,1-2.143,22.46A67.551,67.551,0,0,1,993-49.015a66.171,66.171,0,0,1-11.9,15.556,105.816,105.816,0,0,1-17.619,13.651l37.778,67.3-71.437,13.97L905.378-6.157,885.7-5.522,882.838,60.51H814.584q.794-36.19,1.508-72.063t1.667-72.063q.317-18.254.635-36.19t1.27-36.19a207.443,207.443,0,0,1,21.9-6.825,205.9,205.9,0,0,1,21.667-4.206q10.873-1.508,22.064-2.063t22.936-.556a122.75,122.75,0,0,1,35,5,90.9,90.9,0,0,1,29.921,15,75.153,75.153,0,0,1,20.873,24.921q7.865,14.917,7.865,34.758Zm-71.111,5.079A38.97,38.97,0,0,0,928.949-97.1a27.108,27.108,0,0,0-5.4-9.6,24.792,24.792,0,0,0-8.889-6.349,31.172,31.172,0,0,0-12.46-2.3,47.416,47.416,0,0,0-6.19.4,42.764,42.764,0,0,0-5.873,1.19L887.6-54.729h3.81a57.738,57.738,0,0,0,13.89-1.746,41.447,41.447,0,0,0,12.7-5.4,29.914,29.914,0,0,0,9.206-9.365,25.235,25.235,0,0,0,3.568-13.648Z"
                        transform="translate(308.908 768.646)"
                        fill="#00DCFF"
                      />
                      <g id="Group_622" data-name="Group 622">
                        <path
                          id="Intersection_3"
                          data-name="Intersection 3"
                          d="M680.237,233.555l-1.618-46.364a6,6,0,0,1,5.786-6.206l47.108-1.645a6,6,0,0,1,6.206,5.787l1.619,46.36q-1.832.568-3.687,1.059a114.415,114.415,0,0,1-15.714,3.016,130.421,130.421,0,0,1-15.555.952q-.519.006-1.039.006A91.487,91.487,0,0,1,680.237,233.555Z"
                          transform="translate(314 599)"
                          fill="#f9c149"
                        />
                        <g
                          id="Group_227"
                          data-name="Group 227"
                          transform="translate(1000.417 790.365) rotate(-2)"
                        >
                          <circle
                            id="Ellipse_1"
                            data-name="Ellipse 1"
                            cx="8.213"
                            cy="8.213"
                            r="8.213"
                            fill="#fff"
                          />
                          <circle
                            id="Ellipse_136"
                            data-name="Ellipse 136"
                            cx="4.928"
                            cy="4.928"
                            r="4.928"
                            transform="translate(3.114 3.512)"
                            fill="#272727"
                          />
                        </g>
                        <g
                          id="Group_228"
                          data-name="Group 228"
                          transform="translate(1028.325 789.39) rotate(-2)"
                        >
                          <circle
                            id="Ellipse_1-2"
                            data-name="Ellipse 1"
                            cx="8.213"
                            cy="8.213"
                            r="8.213"
                            fill="#fff"
                          />
                          <circle
                            id="Ellipse_136-2"
                            data-name="Ellipse 136"
                            cx="4.928"
                            cy="4.928"
                            r="4.928"
                            transform="translate(3.114 3.512)"
                            fill="#272727"
                          />
                        </g>
                      </g>
                      {/* red */}
                      <g id="Group_620" data-name="Group 620 ">
                        <path
                          id="Intersection_2"
                          data-name="Intersection 2"
                          d="M418.163,85.858C412.5,77.008,410.431,64.5,410.431,64.5L393.852,72.18s6.648-11.194,3.385-21.37-1.837-21.882,1.476-28.094a33.221,33.221,0,0,1,5.053-7.107l58.044-2.786,15.255,31.744c-1.221,9.872-6.867,17.959-11.585,24.188-5.166,6.819-.69,21.1-.69,21.1s-7.457-3.195-11.937-8.329a38.523,38.523,0,0,1-6.614-11.348s-6.189,6.2-9.068,13.23-2.893,18.265-2.893,18.265S423.832,94.709,418.163,85.858Z"
                          transform="translate(314 587.443)"
                          fill="#f16c6c"
                        />
                        <circle
                          id="Ellipse_253"
                          data-name="Ellipse 253"
                          cx="10.237"
                          cy="10.237"
                          r="10.237"
                          transform="translate(774.609 649.522) rotate(-171)"
                          fill="#fff"
                        />
                        <path
                          id="Path_2340"
                          data-name="Path 2340"
                          d="M10.237,0A10.237,10.237,0,1,1,0,10.237,10.237,10.237,0,0,1,10.237,0Z"
                          transform="translate(739.183 643.911) rotate(-171)"
                          fill="#fff"
                        />
                        <ellipse
                          id="Ellipse_255"
                          data-name="Ellipse 255"
                          cx="6.214"
                          cy="6.214"
                          rx="6.214"
                          ry="6.214"
                          transform="translate(771.605 644.973) rotate(-171)"
                          fill="#272727"
                        />
                        <ellipse
                          id="Ellipse_256"
                          data-name="Ellipse 256"
                          cx="6.214"
                          cy="6.214"
                          rx="6.214"
                          ry="6.214"
                          transform="translate(736.178 639.362) rotate(-171)"
                          fill="#272727"
                        />
                      </g>
                      {/* purple */}
                      <g id="Group_623" data-name="Group 623">
                        <path
                          id="Intersection_1"
                          data-name="Intersection 1"
                          d="M20.7,225.256l1.147-51.674c7.65-9.023,19.986-19.318,37.778-14.454,22.145,6.053,28.689,19.052,30.945,28.657s.135,26.967-5.983,37.412a23.007,23.007,0,0,1-5.789,6.347l-47.049.93A77.831,77.831,0,0,1,20.7,225.256Z"
                          transform="translate(293.465 599)"
                          fill="#6e7ae2"
                        />
                        <circle
                          id="Ellipse_148"
                          data-name="Ellipse 148"
                          cx="15.083"
                          cy="15.083"
                          r="15.083"
                          transform="translate(342.503 763.128) rotate(21)"
                          fill="#fff"
                        />
                        <circle
                          id="Ellipse_147"
                          data-name="Ellipse 147"
                          cx="9.599"
                          cy="9.599"
                          r="9.599"
                          transform="translate(345.658 770.214) rotate(21)"
                          fill="#464646"
                        />
                      </g>
                    </g>
                  </svg>
                </Animated>
              </div>
            ) : (
              ''
            )}
            {this.state.whiteShow ? (
              <div className="funer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="996.794"
                  height="240"
                  viewBox="0 0 996.794 240"
                >
                  <defs>
                    <linearGradient id="b1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.7">
                        <animate
                          attributeName="stopOpacity"
                          from="0.7"
                          to="1"
                          dur="100ms"
                          fill="freeze"
                        />
                      </stop>
                      <stop offset="30%" stopColor="#fff" stopOpacity="0.3">
                        <animate
                          attributeName="stopOpacity"
                          from="0.3"
                          to="1"
                          dur="200ms"
                          fill="freeze"
                        />
                      </stop>
                      <stop offset="100%" stopColor="#fff" stopOpacity="0">
                        <animate
                          attributeName="stopOpacity"
                          from="0"
                          to="1"
                          dur="550ms"
                          fill="freeze"
                        />
                      </stop>
                    </linearGradient>
                  </defs>
                  <path
                    id="Path_2306"
                    data-name="Path 2306"
                    d="M156.52-165.84q-.952,14.921-1.746,29.524t-2.063,29.524l-67.3,3.492v20h58.413l-3.175,49.206L85.092-32.507l.317,93.968L5.092,63.049,10.171-165.84Zm206.063,52.381q0,11.746-1.111,25.873T357.822-58.38q-2.54,15.079-6.587,30.556A218.6,218.6,0,0,1,341.155,1.938a175.46,175.46,0,0,1-14.048,26.746A105.4,105.4,0,0,1,308.695,50.43a81.329,81.329,0,0,1-23.254,14.6,74.085,74.085,0,0,1-28.571,5.317q-18.413,0-31.984-5.952a71.849,71.849,0,0,1-23.254-16.032,85.02,85.02,0,0,1-15.873-23.492,147.3,147.3,0,0,1-9.683-28.413,217.347,217.347,0,0,1-4.841-30.635q-1.349-15.635-1.349-30.079a444.012,444.012,0,0,1,2.222-44.365q2.222-22.143,6.349-44.206l74.286,2.857q-4.286,24.921-7.381,50.079a413.629,413.629,0,0,0-3.1,50.556q0,2.7.238,8.016t.873,11.9q.635,6.587,1.825,13.492A74.363,74.363,0,0,0,248.457-3.3a32.426,32.426,0,0,0,5,9.365,8.667,8.667,0,0,0,6.9,3.651q4.6,0,8.254-4.365a40.675,40.675,0,0,0,6.429-11.667,117.62,117.62,0,0,0,4.841-16.825q2.063-9.524,3.492-19.841t2.3-20.635q.873-10.317,1.429-19.206t.714-15.714q.159-6.825.159-10.159,0-12.381-.4-24.683t-1.19-24.524h74.286Q362.584-136,362.584-113.459Zm236.7-51.111L587.854,50.668l-83.175,7.619L460.235-56.951l-6.984,117.46H381.822l5.714-225.079,79.365-3.81L521.822-54.094l2.54-107.936ZM797.409-65.2a201.906,201.906,0,0,1-1.9,27.619q-27.143,1.746-53.968,5.635t-53.651,7.7A39.4,39.4,0,0,0,700.822-6,33.321,33.321,0,0,0,721.854.827a46.4,46.4,0,0,0,13.889-2.381,114.778,114.778,0,0,0,15-5.952q7.46-3.571,14.286-7.7t11.746-7.46L769.155,49.4a70.093,70.093,0,0,1-13.413,8.1,92.049,92.049,0,0,1-15,5.4,114.323,114.323,0,0,1-15.714,3.016,130.511,130.511,0,0,1-15.555.952,91.456,91.456,0,0,1-28.73-4.286,84.608,84.608,0,0,1-23.571-11.984,88.541,88.541,0,0,1-18.492-18.175A106.213,106.213,0,0,1,625.5,9.557a131.964,131.964,0,0,1-7.937-26.19,145.337,145.337,0,0,1-2.7-27.937,163.879,163.879,0,0,1,2.7-29.524,147.2,147.2,0,0,1,8.175-28.413,120.668,120.668,0,0,1,13.81-25.317A98.863,98.863,0,0,1,659-148.221a86.843,86.843,0,0,1,25.159-13.651,93.344,93.344,0,0,1,31.032-4.921,81.2,81.2,0,0,1,25.794,3.889,71.8,71.8,0,0,1,20.794,10.794,74.311,74.311,0,0,1,15.873,16.429,94.824,94.824,0,0,1,11.111,20.873,124.783,124.783,0,0,1,6.508,23.968A152.849,152.849,0,0,1,797.409-65.2Zm-63.492-8.254a45.739,45.739,0,0,0-.952-9.127,28.98,28.98,0,0,0-3.1-8.492,18.886,18.886,0,0,0-5.635-6.27,14.788,14.788,0,0,0-8.73-2.46,18.932,18.932,0,0,0-11.19,3.413,32.978,32.978,0,0,0-8.333,8.571,51.85,51.85,0,0,0-5.714,11.19,84.969,84.969,0,0,0-3.333,11.111l46.984-4.444Zm267.968-16.508a108.291,108.291,0,0,1-2.143,22.46A67.548,67.548,0,0,1,993-49.015a66.17,66.17,0,0,1-11.9,15.556,105.822,105.822,0,0,1-17.619,13.651l37.778,67.3L929.822,61.462,905.378-6.157l-19.683.635-2.857,66.032H814.584q.794-36.19,1.508-72.063t1.667-72.063q.317-18.254.635-36.19t1.27-36.19a207.443,207.443,0,0,1,21.9-6.825,205.9,205.9,0,0,1,21.667-4.206q10.873-1.508,22.064-2.063t22.936-.556a122.75,122.75,0,0,1,35,5,90.9,90.9,0,0,1,29.921,15,75.152,75.152,0,0,1,20.873,24.921Q1001.885-109.808,1001.885-89.967Zm-71.111,5.079a38.972,38.972,0,0,0-1.825-12.222,27.107,27.107,0,0,0-5.4-9.6,24.792,24.792,0,0,0-8.889-6.349,31.172,31.172,0,0,0-12.46-2.3,47.417,47.417,0,0,0-6.19.4,42.764,42.764,0,0,0-5.873,1.19L887.6-54.729h3.81A57.738,57.738,0,0,0,905.3-56.475a41.447,41.447,0,0,0,12.7-5.4,29.915,29.915,0,0,0,9.206-9.365A25.234,25.234,0,0,0,930.774-84.888Z"
                    transform="translate(-5.092 169.649)"
                    fill="url(#b1)"
                  />
                </svg>
              </div>
            ) : (
              ''
            )}
            {this.state.yellow_circle ? (
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="230"
                  height="230"
                  viewBox="0 0 114 114"
                >
                  <circle
                    id="Ellipse_233"
                    data-name="Ellipse 233"
                    cx="57"
                    cy="57"
                    r="57"
                    fill="#fff"
                  />
                </svg>
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </>
    )
  }
}
export default Preload_page
