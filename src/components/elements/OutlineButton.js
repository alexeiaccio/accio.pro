import React from 'react'
import styled from 'styled-components'

import { Button } from './Button'

const OutlineButton = Button.extend.attrs({
  style: ({ border, color }) => ({
    border,
    color
  })
})`
  background: white;
`

export default ({ children, color, ...attrs }) => (
  <OutlineButton 
    style={{
      border: `1px solid rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`,
      color: `rgb(0, ${Math.floor(color.g % 255)}, ${Math.floor(color.b % 255)})`
    }}
    {...attrs} 
  >
  { children }
  </OutlineButton>
)