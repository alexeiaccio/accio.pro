import React from 'react'
import styled from 'styled-components'
import { TransitionMotion, spring } from 'react-motion'
import AccioSVG from './AccioSVG'

const leavingSpringConfig = {stifftness: 30, damping: 100}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 8000px;
  background-color: #1B1B1B;
`

export default class Accio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mouseX: 0, mouseY: 0, now: 't' + 0}
  }

  handleMouseMove = ({ pageX, target: { offsetLeft } }) => {
    this.setState(() => ({
        mouseX: this.state.mouseY + pageX/10 - offsetLeft - 75,
        now: 't' + Date.now(),
    }))
  }

  handleWheel = ({deltaY}) => {
    this.setState(() => ({
        mouseY: this.state.mouseY - deltaY/10,
        now: 't' + Date.now(),
    }))
  }

  handleScroll = (e) => {
    console.log(e)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
    }
  }

  render() {
    const {mouseX, mouseY, now} = this.state
    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        x: spring(mouseX),
        y: spring(mouseY),
      }
    }]

    return (
      <TransitionMotion willLeave={this.willLeave} styles={styles}>
        {accios =>
          <Container
            onWheel={this.handleWheel}
            onMouseMove={this.handleMouseMove}
          >
          {accios.map(({key, style: {opacity, x, y}}) =>
            <div
              key={key}
              style={{
                position: `absolute`,
                width: `100%`,
                opacity: opacity,
                transform: `translate3d(0, ${y}px, 0)`,
                WebkitTransform: `translate3d(0, ${y}px, 0)`,
              }}>
                <AccioSVG />
              </div>
            )}
          </Container>
        }
      </TransitionMotion>
    )
  }
}