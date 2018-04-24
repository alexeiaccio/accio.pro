import React, { Component } from 'react'
import styled from 'styled-components'

const SVGWrapper = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  transition: all .4s ease-in-out;
  opacity: 0;
  &.mount {
    opacity: 1;
  }
`

const StyledSVG = styled.svg`
  width: 100%;
  height: auto;
  flex: 0 0 100%;
  transform: translateY(-15%);
  &.vertical {
    min-width: 100vh;
    transform: rotateZ(-90deg) translateY(-10%);
  }
  & .animated {
    filter: url(#hue) url(#blur);
  }
`

class AccioSVG extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hue: 0,
      mount: false,
      isVertical: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('onorientationchange', this.updateWindowDimensions)
    const intervalId = setInterval(this.keyframe, 400)
    this.setState({
      intervalId: intervalId,
      mount: true,
      width: window.innerWidth,
      height: window.innerHeight,
      isVertical: window.innerHeight / window.innerWidth > 1 ? true : false
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('onorientationchange', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      isVertical: window.innerHeight / window.innerWidth > 1 ? true : false
    })
  }

  keyframe = () => {
    this.setState({ hue: (this.state.hue + 2) % 360 })
  }

  render() {
    return (
      <SVGWrapper className={this.state.mount && 'mount'} >
        <StyledSVG viewBox='0 0 1440 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' className={this.state.isVertical && 'vertical'} >
          <g id='Canvas' transform='translate(967 150)'>
            <g id='shade' className='animated' transform='translate(-1010, 30)'>
              <ellipse cx='191.635' cy='277.478' rx='191.635' ry='277.478' transform='matrix(0.930532 -0.366211 0.366211 0.930532 218 313.358)' fill='url(#paint0_radial)'/>
              <ellipse cx='198.5' cy='287.5' rx='198.5' ry='287.5' transform='matrix(0.64725 -0.762278 0.762278 0.64725 1004 431.624)' fill='url(#paint1_radial)'/>
              <ellipse cx='199.5' cy='289' rx='199.5' ry='289' transform='matrix(0.714156 0.699986 -0.699986 0.714156 146.592 173)' fill='url(#paint2_radial)'/>
              <ellipse cx='84.3611' cy='284.515' rx='84.3611' ry='284.515' transform='matrix(0.987403 0.158226 -0.158226 0.987403 1040.04 81)' fill='url(#paint3_radial)'/>
              <ellipse cx='162.094' cy='320.634' rx='162.094' ry='320.634' transform='matrix(-0.345525 -0.93841 0.93841 -0.345525 567.015 803.794)' fill='url(#paint4_radial)'/>
            </g>
            <g id='accio' fill='#fff' transform='translate(0, 340)'>
              <path id='path0_fill' transform='translate(-967 33)' d='M 191.787 0L 383.574 332.065L 0 332.065L 191.787 0Z' />
              <path id='path1_fill' transform='translate(-574.759 29)' d='M 169.497 169.516L 273.982 303.735C 260.36 314.572 244.881 323.241 227.544 329.743C 210.207 335.935 190.858 339.032 169.497 339.032C 146.278 339.032 124.298 334.542 103.556 325.563C 83.1232 316.584 65.1674 304.509 49.6882 289.338C 34.5186 273.857 22.4448 255.899 13.4669 235.464C 4.48896 214.72 0 192.737 0 169.516C 0 146.294 4.48896 124.466 13.4669 104.032C 22.4448 83.2872 34.5186 65.3294 49.6882 50.1581C 65.1674 34.6772 83.1232 22.4473 103.556 13.4684C 124.298 4.48945 146.278 0 169.497 0C 187.143 0 204.325 2.78656 221.043 8.35968C 237.76 13.6232 253.24 21.3636 267.48 31.581L 169.497 169.516Z' />
              <path id='path1_fill' transform='translate(-285 29)' d='M 169.497 169.516L 273.982 303.735C 260.36 314.572 244.881 323.241 227.544 329.743C 210.207 335.935 190.858 339.032 169.497 339.032C 146.278 339.032 124.298 334.542 103.556 325.563C 83.1232 316.584 65.1674 304.509 49.6882 289.338C 34.5186 273.857 22.4448 255.899 13.4669 235.464C 4.48896 214.72 0 192.737 0 169.516C 0 146.294 4.48896 124.466 13.4669 104.032C 22.4448 83.2872 34.5186 65.3294 49.6882 50.1581C 65.1674 34.6772 83.1232 22.4473 103.556 13.4684C 124.298 4.48945 146.278 0 169.497 0C 187.143 0 204.325 2.78656 221.043 8.35968C 237.76 13.6232 253.24 21.3636 267.48 31.581L 169.497 169.516Z' />
              <path id='path2_fill' transform='translate(36 -105)' d='M 28.7913 463.034L 9.28754 463.034L 9.28754 162.549L 28.7913 162.549L 28.7913 463.034ZM 38.0787 114.713L 0 114.713L 0 0L 38.0787 0L 38.0787 114.713Z' />
              <path id='path3_fill' transform='translate(134.006 29)' d='M 0 169.516C 0 146.294 4.33422 124.466 13.0026 104.032C 21.9805 83.2872 34.0543 65.3294 49.2239 50.1581C 64.7031 34.6772 82.6589 22.4473 103.091 13.4684C 123.834 4.48946 145.969 0 169.497 0C 193.026 0 215.006 4.48946 235.438 13.4684C 256.181 22.4473 274.136 34.6772 289.306 50.1581C 304.785 65.3294 316.859 83.2872 325.527 104.032C 334.505 124.466 338.994 146.294 338.994 169.516C 338.994 193.047 334.505 215.184 325.527 235.929C 316.859 256.364 304.785 274.321 289.306 289.802C 274.136 304.974 256.181 317.049 235.438 326.028C 215.006 334.697 193.026 339.032 169.497 339.032C 145.969 339.032 123.834 334.697 103.091 326.028C 82.6589 317.049 64.7031 304.974 49.2239 289.802C 34.0543 274.321 21.9805 256.364 13.0026 235.929C 4.33422 215.184 0 193.047 0 169.516Z' />
              </g>
          </g>
          <defs>
            <radialGradient id='paint0_radial' cx='0.5' cy='0.5' r='0.5' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 554.957 -383.271 0 383.271 0)'>
              <stop stopColor='#2FC2C2'/>
              <stop offset='1' stopColor='#2FC2C2' stopOpacity='0'/>
            </radialGradient>
            <radialGradient id='paint1_radial' cx='0.5' cy='0.5' r='0.5' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 575 -397 0 397 0)'>
              <stop stopColor='#C22FAA'/>
              <stop offset='1' stopColor='#C22FAA' stopOpacity='0'/>
            </radialGradient>
            <radialGradient id='paint2_radial' cx='0.5' cy='0.5' r='0.5' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 578 -399 0 399 0)'>
              <stop stopColor='#DAEB1C'/>
              <stop offset='1' stopColor='#DAEB1C' stopOpacity='0'/>
            </radialGradient>
            <radialGradient id='paint3_radial' cx='0.5' cy='0.5' r='0.5' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 569.03 -168.722 0 168.722 0)'>
              <stop stopColor='#E06C6C'/>
              <stop offset='1' stopColor='#E07979' stopOpacity='0'/>
            </radialGradient>
            <radialGradient id='paint4_radial' cx='0.5' cy='0.5' r='0.5' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 641.267 -324.187 0 324.187 0)'>
              <stop stopColor='#2F58C2'/>
              <stop offset='1' stopColor='#2F58C2' stopOpacity='0'/>
            </radialGradient>
            <filter id='hue'>
              <feColorMatrix in='SourceGraphic'
                type='hueRotate'
                values={this.state.hue} />
            </filter>
            <filter id='blur'>
              <feGaussianBlur in='SourceGraphic' stdDeviation={this.state.hue/10 + 20} />
            </filter>
          </defs>
        </StyledSVG>
      </SVGWrapper>
    )
  }
}


export default AccioSVG