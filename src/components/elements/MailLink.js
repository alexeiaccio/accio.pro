import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

import Definition from './Definition'

const AnimatedLink = styled.a.attrs({
  style: ({ color }) => ({
    color
  })
})`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: var(--base);
  text-decoration: none;
  transition: all .6 ease-in-out;
`

const Col = styled.div`
  flex: 1;
  width: 100%;
  max-width: 50%;
  &:first-child {
    text-align: right;
  }
`

class MailLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 240,
      y: 50,
      def: 0,
      definitions: [
        this.props.definitions.list[0]
      ]
    }
  }

  keyframe = () => {
    this.setState({ def: Math.floor(0 + Math.random() * this.props.definitions.list.length) })
  }

  componentDidMount = () => {
    const intervalId = setInterval(this.keyframe, 2000)
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.def !== this.state.def) {
      let newDefinitions = this.state.definitions.slice()
      newDefinitions.push(this.props.definitions.list[this.state.def])
      let cuttedDefinitions = newDefinitions.filter((definition, i) => i > 0 && i < 2)
      this.setState({
        definitions: cuttedDefinitions
      })
    }
  }

  handleMouseMove = ({pageX, pageY}) => {
    this.setState({
      x: pageX + 100,
      y: pageY + 100
    })
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
      <Fragment>
        <Motion
          defaultStyle={{ b: 240, g: 50 }}
          style={style}
        >
        {color =>
          <AnimatedLink
            href={`${url}?subject=${definitions.want}%20${this.state.definitions[0].text.replace(/\W$/gi, 'й')}%20${definitions.sites.replace(/(\w|\W)$/gi, '')}`}
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.handleTouchMove}
            onTouchStart={this.handleTouchMove}
            style={{
              color: `rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`
            }}
          >
            <Col>
              <Definition definitions={this.state.definitions} color={color} />
            </Col>
            <Col>
              <span> {definitions.sites}</span>
            </Col>
          </AnimatedLink>
        }
        </Motion>
      </Fragment>
    )
  }
}

export default MailLink