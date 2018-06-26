import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

import Definition from './Definition'
import { default as LinkButton } from './LinkButton'
import { default as OutlineButton } from './OutlineButton'

const Row = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: wrap;  
  height: auto;
  justify-content: flex-start;
  padding: 0 3rem;
  position: relative;
  width: auto;
`

const Col = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 2rem;
  justify-content: flex-start;
`

const Animated = styled.span.attrs({
  style: ({ color }) => ({
    color
  })
})`
  height: 3rem;
  margin-right: 1.75rem;
  white-space: nowrap;
`

class MailLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 240,
      y: 50,
      defV: 0,
      defA: 0,
      defN: 0,
      verb: [ this.props.definitions.verbs[0] ],
      adj: [ this.props.definitions.adjectives[0] ],
      noun: [ this.props.definitions.nouns[0] ],
    }
  }

  keyframe = () => {
    this.setState({ 
      defV: Math.floor(0 + Math.random() * this.props.definitions.verbs.length),
      defA: Math.floor(0 + Math.random() * this.props.definitions.adjectives.length),
      defN: Math.floor(0 + Math.random() * this.props.definitions.nouns.length),
    })
  }

  componentDidMount = () => {
    const intervalId = setInterval(this.keyframe, 2000)
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.defA !== this.state.defA) {
      const newVerb = this.state.verb.slice()
      newVerb.push(this.props.definitions.verbs[this.state.defV])
      const cuttedVerb = newVerb.filter((definition, i) => i > 0 && i < 2)
      const newAdj = this.state.adj.slice()
      newAdj.push(this.props.definitions.adjectives[this.state.defA])
      const cuttedAdj = newAdj.filter((definition, i) => i > 0 && i < 2)
      const newNoun = this.state.noun.slice()
      newNoun.push(this.props.definitions.nouns[this.state.defN])
      const cuttedNoun = newNoun.filter((definition, i) => i > 0 && i < 2)
      this.setState({
        verb: cuttedVerb,
        adj: cuttedAdj,
        noun: cuttedNoun,
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
      <Row
        onMouseMove={this.handleMouseMove}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchMove}
      >
        <Motion
          defaultStyle={{ b: 240, g: 50 }}
          style={style}
        >
        {color =>
          <Col>
            <Animated
              style={{
                color: `rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`
              }}            
            >{ this.props.definitions.get }</Animated>
            <LinkButton 
              href={`${url}?subject=${this.props.definitions.get}%20${this.state.verb[0].text}%20${this.state.adj[0].text}%20${this.state.noun[0].text}`} 
              color={color}
            >            
              <Definition definitions={this.state.verb} color='white' />
            </LinkButton>   
            <OutlineButton color={color} >
              <Definition definitions={this.state.adj} color={color} />
            </OutlineButton>
            <OutlineButton color={color} >
              <Definition definitions={this.state.noun} color={color} />
            </OutlineButton> 
          </Col>
        }
        </Motion>
      </Row>
    )
  }
}

export default MailLink