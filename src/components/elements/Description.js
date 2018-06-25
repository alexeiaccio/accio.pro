import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

const Definition = styled.div`
  font-size: var(--base);
  line-height: 1.4;
  padding: 3rem;
  position: relative;
  & a {
    background-position-x: center;
    font-variant-caps: all-small-caps;
    text-decoration: none;
  }
  & a:not([target="_blank"]) {
    background: linear-gradient(to bottom, #E06C6C 0%, #E06C6C 100%) no-repeat;
    background-position-y: 1.95rem;
    background-size: 100% .4rem;
    color: #E06C6C;
    &:hover {
      background: linear-gradient(to bottom, #2FC2C2 0%, #2FC2C2 100%) no-repeat;
      background-position-y: 1.95rem;
      background-size: 100% .4rem;
      color: #2FC2C2;
    } 
  }
  & a[target="_blank"] {    
    background: linear-gradient(to bottom, #56CCF2 0%, #56CCF2 100%) no-repeat;
    background-position-y: .78rem;
    background-size: 100% 1.15rem;
    color: black;
    &:hover {
      background: linear-gradient(to bottom, #08f 0%, #08f 100%) no-repeat;
      background-position-y: .78rem;
      background-size: 100% 1.15rem;
    } 
  }
` 

const linkResolver = x => '/'

export default ({ description: { richtext } }) => (
  <Definition>
  { RichText.render(richtext, linkResolver) }  
  </Definition>
)

/* { RichText.asText(text, linkResolver) } */