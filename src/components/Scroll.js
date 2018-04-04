import React from 'react'
import { Scroller, ScrollProvider, ScrollLink } from 'react-skroll'
import { StaggeredMotion, spring, presets } from 'react-motion'
import LazyLoad, { forceCheck } from 'react-lazyload'
import AccioSVG from './Accio/AccioSVG'

function round(val) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  return Math.round(val * precision) / precision;
}

const leavingSpringConfig = {stifftness: 30, damping: 100}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {top: 0, now: 't' + 0}
  }

  componentDidUpdate() {
    forceCheck()
  }

  render() {
    const style = {
      wrapper: {
        position: 'fixed',
        height: '100%',
        width: '100%'
      }
    }

    const colors = [
      {name: "Blue", color: "#215cf4" },
      {name: "Cyan", color: "#0ccabf" },
      {name: "Green", color: "#4ac36c" },
      {name: "Yellow", color: "#e0be18" },
      {name: "Red", color: "#e91e4f" },
      {name: "Magenta", color: "#ca28e4" },
    ]

    const {top, now} = this.state
    const styles = this.props.scroll.position == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        top: spring(this.props.scroll.position)
      }
    }]

    return (
      <div style={style.wrapper}>
        <Scroller style={{position: 'relative'}}>
          {
            colors.map(({ name, color }, index) =>
              <LazyLoad key={index} height={'100%'} offset={-400}>
                <section name={name} style={{border: `1px solid ${color}`}}>
                  <h1>{round(this.props.scroll.positionRatio)}</h1>
                  <ul style={{position: 'relative', zIndex: 2000}}>
                    {
                      Object.entries(this.props.scroll)
                        .filter(([key, value]) => typeof value !== 'function')
                        .filter(([key, value]) => typeof value !== 'object')
                        .map(([key, value]) =>
                        <li key={key}><span className="key">{key}:</span> <span key={key} className={value ? 'active' : 'inactive'}>{value.toString()}</span></li>
                      )
                    }
                  </ul>
                  <StaggeredMotion
                    defaultStyles={[{t: 0}, {t: 0}, {t: 0}, {t: 0}, {t: 0}]}
                    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                      return i === 0
                        ? {t: spring(this.props.scroll.position, presets.gentle)}
                        : {t: spring(prevInterpolatedStyles[i - 1].t, presets.gentle)}
                    })}>
                      {accios =>
                        <div>
                          {accios.map((style, i) =>
                            <div key={i} style={{position: 'absolute', width: '100%', top: style.t, zIndex: accios.length - i}}>
                              <AccioSVG />
                            </div>
                          )}
                        </div>
                      }
                  </StaggeredMotion>
                  <div style={{position: 'absolute', width: '100%', top: this.props.scroll.position, zIndex: 1000}}>
                    <AccioSVG />
                  </div>
                </section>
              </LazyLoad>
            )
          }
        </Scroller>
      </div>
    )
  }
}

export default class Accio extends React.Component {
  render() {

    return (
      <ScrollProvider>
        <Demo />
      </ScrollProvider>
    )
  }
}