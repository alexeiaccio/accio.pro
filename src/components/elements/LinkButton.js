import React from 'react'
import styled from 'styled-components'

import { Button } from './Button'

const Link = Button.withComponent('a')

const LinkButton = Link.extend.attrs({
  style: ({ background, border }) => ({
    background, 
    border
  })
})`
  color: white;
  text-decoration: none;
`

export default ({ children, color, ...attrs }) => (
  <LinkButton 
    style={{
      border: `1px solid rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`,
      background: `rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`
    }}
    {...attrs} 
  >
  { children }
  </LinkButton>
)