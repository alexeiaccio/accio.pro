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
  text-decoration: none;
  transition: all .6 ease-in-out;
`


class MailLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 240,
      y: 50
    }
  }

  handlerMouseMove = ({pageX, pageY}) => {
    this.setState({
      x: pageX + 100,
      y: pageY + 100
    })
  }

  handleTouchMove = (e) => {
    e.preventDefault()
    this.handleMouseMove(e.touches[0])
  }


  render() {
    const { url } = this.props
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
          onMouseMove={this.handlerMouseMove}
          onTouchMove={this.handleTouchMove}
          style={{
            color: `rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`
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