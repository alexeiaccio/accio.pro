import React from 'react'
import { Motion, spring, presets } from 'react-motion'

class WavePattern extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: '#3095BF',
      waves: Array.from({length: 13}, (v, i) =>
        i > 0 ? i = 1 + 20 * i : i += 1),
      x: 0
    }
  }

  handlerMouseEnter = () => {
    const intervalId = setInterval(this.timer, 800)
    this.setState({intervalId: intervalId})
  }

  handlerMouseLeave = () => {
    clearInterval(this.state.intervalId)
    this.setState({ x:  this.state.x += 180 })
  }

  timer = () => {
    this.setState({ x:  this.state.x += 180 })
  }

  render() {
    return (
      <svg
        onMouseEnter={this.handlerMouseEnter}
        onMouseLeave={this.handlerMouseLeave}
        width="225" height="307" viewBox="0 0 225 307" xmlns="http://www.w3.org/2000/svg">
        <style>
        { `.classA { fill:${this.state.fill};transform-style:preserve-3d; }` }
        </style>
        <g id="Canvas">
          <g id="WavePattern">
          {
            this.state.waves.map((wave, i) => (
              <Motion key={i} style={{x: spring(this.state.x, presets.gentle)}}>
              {({x}) => (
                <use
                  href="#path0_stroke"
                  className='classA'
                  style={{transform: `translateY(${wave}px) rotateX(${x}deg)`}} />
                )
              }
              </Motion>
            ))
          }
          </g>
        </g>
        <defs>
          <path id="path0_stroke" d="M 168.279 31.7203L 168.718 31.4818L 168.714 31.4729L 168.708 31.4642L 168.279 31.7203ZM 56.721 31.7203L 56.2916 31.4642L 56.2863 31.4729L 56.2815 31.4818L 56.721 31.7203ZM 112.5 0.5C 136.024 0.5 156.604 13.1235 167.85 31.9764L 168.708 31.4642C 157.29 12.3216 136.391 -0.5 112.5 -0.5L 112.5 0.5ZM 225 64.5C 200.535 64.5 179.626 51.58 168.718 31.4818L 167.84 31.9588C 178.922 52.3792 200.168 65.5 225 65.5L 225 64.5ZM 112.5 -0.5C 88.609 -0.5 67.7099 12.3216 56.2916 31.4642L 57.1504 31.9764C 68.396 13.1235 88.976 0.5 112.5 0.5L 112.5 -0.5ZM 0 65.5C 24.832 65.5 46.0782 52.3792 57.1604 31.9588L 56.2815 31.4818C 45.3742 51.58 24.4652 64.5 0 64.5L 0 65.5Z"/>
        </defs>
      </svg>
    )
  }
}

export default WavePattern

