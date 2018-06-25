import React, { Fragment } from 'react'
import { compose, withState, withHandlers } from 'recompose'
import styled from 'styled-components'

const Whatis = styled.span`
background: linear-gradient(to bottom, #E06C6C 0%, #E06C6C 100%) no-repeat;
background-position-x: center;
background-position-y: 1.9rem;
background-size: 100% .4rem;
color: #E06C6C;
cursor: pointer;
font-variant-caps: all-small-caps;
text-decoration: none;
&:hover {
  background: linear-gradient(to bottom, #2FC2C2 0%, #2FC2C2 100%) no-repeat;
  background-position-y: 1.9rem;
  background-size: 100% .4rem;
  color: #2FC2C2;
} 
`

const FixedTooltip = styled.span`
  background: white;
  color: black;
  display: inline-block;
  left: 5rem;
  max-width: 64rem;
  padding: 3rem;
  position: absolute;
  right: 5rem;
  top: 5rem;
  z-index: 3000;
  box-shadow: 0px 0px 20px #2FC2C2;
  @media (max-width: 600px) {
    background: black;
    color: white;
    left: 2rem;
    right: 2rem;
  }
`

const Close = styled.span`
  color: black;
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  right: 1rem;
  top: .5rem;
  @media (max-width: 600px) {
    color: white;
  }
`

const withToggle = compose(
  withState('toggledOn', 'toggle', false),
  withHandlers({
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  })
)

export const Tooltip = withToggle(({ text, children, toggledOn, toggle }) => (
  <Fragment>
    <Whatis onClick={ toggle }>{ text }</Whatis>
    {toggledOn && 
      <FixedTooltip>
      { children }
      <Close onClick={ toggle }>×</Close>
      </FixedTooltip> 
    }
  </Fragment>
))