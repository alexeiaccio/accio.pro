import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const LangSwitcher = styled(Link)`
  color: black;
  font-size: 3rem;
  font-variant-caps: all-small-caps;
  position: fixed;
  right: 1rem;
  top: 1rem;
  text-decoration: none;
`

export default ({ to }) => (
  <LangSwitcher to={`/${to}`} >
  { to }
  </LangSwitcher>
)