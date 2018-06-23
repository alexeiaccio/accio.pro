import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  background: black;
  border-radius: .5rem;
  color: white;
  padding: .5rem 1.5rem;
  text-decoration: none;
`

export default ({ children, ...attrs }) => (
  <Button {...attrs} >
  { children }
  </Button>
)