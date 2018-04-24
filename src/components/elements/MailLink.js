import React, { Component } from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

const AnimatedLink = styled.a.attrs({
  style: ({ color }) => ({
    color
  })
})`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 3rem;
  color: #000;
  text-decoration: none;
  transition: all .6 ease-in-out;
`


class MailLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  handlerMouseMove = ({pageX, pageY}) =>
    this.setState({
      x: pageX,
      y: pageY
    })

  render() {
    const { url } = this.props
    const style = {
      r: spring(this.state.x, presets.gentle),
      g: spring(this.state.y, presets.gentle)
    }

    return (
      <Motion
        defaultStyle={{ r: 0, g: 0 }}
        style={style}
      >
      {color =>
        <AnimatedLink
          href={url}
          onMouseMove={this.handlerMouseMove}
          onTouchMove={this.handlerMouseMove}
          style={{
            color: `rgb(${Math.floor(color.r % 255)}, ${Math.floor(color.g % 255)}, 0)`
          }}
        >
        { url.replace('mailto:', '') }
        </AnimatedLink>
      }
      </Motion>
    )
  }
}

export default MailLink