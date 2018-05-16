import React, { Component } from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

import { throttle } from 'Helpers'

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
  text-decoration: none;
  transition: all .6 ease-in-out;
`

const throttleSec = throttle(1000)

class MailLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 240,
      y: 50,
      def: 0
    }
  }

  handleMouseMove = ({pageX, pageY}) => {
    this.setState({
      x: pageX + 100,
      y: pageY + 100
    })

    throttleSec(this.setState({
      def: pageX * pageY % this.props.definitions.list.length
    }))
  }

  handleTouchMove = (e) => {
    this.handleMouseMove(e.touches[0])
  }


  render() {
    const { url, definitions } = this.props
    const style = {
      b: spring(this.state.x, presets.gentle),
      g: spring(this.state.y, presets.gentle)
    }

    return (
      <Motion
        defaultStyle={{ b: 240, g: 50 }}
        style={style}
      >
      {color =>
        <AnimatedLink
          href={url}
          onMouseMove={this.handleMouseMove}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchMove}
          style={{
            color: `rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`
          }}
        >
        { `${definitions.list[this.state.def].text} ${definitions.sites}` }
        </AnimatedLink>
      }
      </Motion>
    )
  }
}

export default MailLink