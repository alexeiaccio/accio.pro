import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

import Definition from './Definition'
import { default as LinkButton } from './LinkButton'

const Animated = styled.span.attrs({
  style: ({ color }) => ({
    color
  })
})`
  margin-left: 1rem;
  transition: all .2 ease-in-out;
`

const Row = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding: 0 3rem;
`

const Col = styled.div`
  
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
      <Row>
        <Col>
          <LinkButton 
            href={`${url}?subject=${definitions.want}%20${this.state.definitions[0].text.replace(/\W$/gi, 'й')}%20${definitions.sites.replace(/(\w|\W)$/gi, '')}`} 
          >Хочу</LinkButton>
        </Col>
        <Col
          onMouseMove={this.handleMouseMove}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchMove}
        >
          <Motion
            defaultStyle={{ b: 240, g: 50 }}
            style={style}
          >
          {color =>
            <Animated
              style={{
                color: `rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`
              }}
            >
              <Definition definitions={this.state.definitions} color={color} />
              <span> {definitions.sites.replace(/(\w|\W)$/gi, '')}</span>
            </Animated>
          }
          </Motion>
        </Col>
      </Row>
    )
  }
}

export default MailLink