import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { TransitionMotion, spring, presets } from 'react-motion'

import { s4 } from 'Helpers'

const Container = styled.span`
  display: inline-flex;
  flex-direction: column;
`

const LineThrough = styled.span.attrs({
  style: ({ textDecorationColor }) => ({
    textDecorationColor
  })
})`
  text-decoration: line-through dashed;
`

class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definitions: this.props.definitions.map((definition, i) =>
        ({data: definition, key: `key-${s4()}`}))
    }
  }

  componentDidMount = () => {
    this.setState({ innerWidth: window.innerWidth })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.definitions[0].data.text !== this.props.definitions[0].text) {
      this.setState({
        definitions: this.props.definitions.map((definition, i) =>
        ({data: definition, key: `key-${s4()}`}))
      })
    }
  }

  getDefaultStyles = () => {
    return this.state.definitions.map(definition =>
      ({...definition, style: {
        height: 0,
        opacity: 1,
      }}))
  }

  getStyles = () => {
    return this.state.definitions.map(definition => {
      return {
        ...definition,
        style: {
          height: spring(this.state.innerWidth < 601 ? 24 : 48, presets.gentle),
          opacity: spring(1, presets.gentle),
        }
      }
    })
  }

  willEnter() {
    return {
      height: 0,
      opacity: 1,
    }
  }

  willLeave() {
    return {
      height: spring(0, presets.gentle),
      opacity: spring(0, presets.gentle),
    }
  }

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willLeave={this.willLeave}
        willEnter={this.willEnter}
      >
      {styles =>
        <Container>
        {styles.map(({key, style, data: {text}}, i) =>
          <span key={i} style={style}>
          {text.includes('не')
            ? <LineThrough style={{
              textDecorationColor: `rgb(${Math.floor(this.props.color.b % 255)}, 0, ${Math.floor(this.props.color.g % 255)})`
            }}>{text.replace('не ', '')}</LineThrough>
            : text.includes('not')
            ? <LineThrough style={{
              textDecorationColor: `rgb(${Math.floor(this.props.color.b % 255)}, 0, ${Math.floor(this.props.color.g % 255)})`
              }}>{text.replace('not ', '')}</LineThrough>
            : text
          }
          </span>
        )}
        </Container>
      }
      </TransitionMotion>
    )
  }
}

export default Definition