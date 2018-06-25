import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { TransitionMotion, spring, presets } from 'react-motion'

import { s4 } from 'Helpers'

const Container = styled.span`
  display: inline-flex;
  height: 3rem;
  flex-direction: column;
  position: relative;
`

const LineThrough = styled.span.attrs({
  style: ({ background, opacity }) => ({
    background, 
    opacity
  })
})`
  background-position: center;
  display: inline-flex;
  height: 100%;
  position: absolute;
  width: 100%;
`

const DefinitionText = styled.span`
  display: inline-flex;
  height: 3rem;
  align-items: center;
  padding: 0 2rem;
  white-space: nowrap;
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
        maxWidth: 1000
      }}))
  }

  getStyles = () => {
    return this.state.definitions.map(definition => {
      return {
        ...definition,
        style: {
          height: spring(this.state.innerWidth < 601 ? 24 : 32, presets.gentle),
          opacity: spring(1, presets.gentle),
          maxWidth: 1000
        }
      }
    })
  }

  willEnter() {
    return {
      height: 0,
      opacity: 1,
      maxWidth: 1000
    }
  }

  willLeave() {
    return {
      height: spring(0, presets.gentle),
      opacity: spring(0, presets.gentle),
      maxWidth: 0
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
          <Fragment>            
            <span key={i} style={style}>
            {text.includes('не') || text.includes('not')
              ? <DefinitionText>
                { text.replace(/не\s?/i, '').replace(/not\s/i, '') }
                </DefinitionText>
              : <DefinitionText>{ text }</DefinitionText>
            }
            </span>
            {text.includes('не') || text.includes('not')
              ? <LineThrough key={i} style={{
                  background: `linear-gradient(165deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 45%,rgba(${Math.floor(this.props.color.b % 255)}, 0, ${Math.floor(this.props.color.g % 255)},1) 46%,rgba(${Math.floor(this.props.color.b % 255)}, 0, ${Math.floor(this.props.color.g % 255)},1) 54%,rgba(255,255,255,0) 55%,rgba(255,255,255,0) 100%)`,
                  opacity: style.opacity
                }} />
              : null
            }
          </Fragment>
        )}
        </Container>
      }
      </TransitionMotion>
    )
  }
}

export default Definition

/* 
;
*/