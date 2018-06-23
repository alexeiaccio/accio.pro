import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

const Definition = styled.div`
  font-size: var(--base);
  line-height: 1.4;
  padding: 3rem;
  position: relative;
  &>p {
    
  }
` 

const linkResolver = x => '/'

export default ({ description: { richtext } }) => (
  <Definition>
  { RichText.render(richtext, linkResolver) }  
  </Definition>
)

/* { RichText.asText(text, linkResolver) } */