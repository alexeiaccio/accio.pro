import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

import { Tooltip } from './Tooltip'

const Definition = styled.div`
  font-size: var(--base);
  line-height: 2.8rem;
  padding: 3rem;
  position: relative;
  max-width: 72rem;
  & a {    
    background-position-x: center;
    font-variant-caps: all-small-caps;
    text-decoration: none;
  }
  & a[target="_blank"] {    
    background: linear-gradient(to bottom, #56CCF2 0%, #56CCF2 100%) no-repeat;
    background-position-y: .85rem;
    background-size: 100% 1.1rem;
    color: black;
    &:hover {
      background: linear-gradient(to bottom, #08f 0%, #08f 100%) no-repeat;
      background-position-y: .85rem;
      background-size: 100% 1.1rem;
    } 
  }
`

export default ({ description: { richtext }, whatis }) => {
  const Definitor = ({ uid, children }) => {
    const Defined = whatis.filter(({ node }) => node.uid === uid)
    return (
      <Tooltip text={ children } >
      { RichText.asText(Defined[0].node.data.title) }
      { RichText.render(Defined[0].node.data.description, linkResolver) }
      </Tooltip>
    )
  }
  
  const linkResolver = x => '/'
  const Elements = RichText.Elements		
  const propsWithUniqueKey = function(props, key) {	
    return Object.assign(props || {}, { key })
  }		
  const htmlSerializer = function(type, element, content, children, key) {	
    var props = {}	
    switch(type) {
      case Elements.hyperlink:	
        const targetAttr = element.data.target ? { target: element.data.target } : {}	
        const relAttr = element.data.target ? { rel: 'noopener' } : {}	
        props = Object.assign({	
          href: element.data.url || linkResolver(element.data)	
        }, targetAttr, relAttr)	
        return element.data.link_type === 'Document' 
          ? React.createElement(Definitor, propsWithUniqueKey(Object.assign({}, {uid: element.data.uid}), key), children) 
          : React.createElement('a', propsWithUniqueKey(props, key), children)	
      default: 	
        return null	
    }	
  }

  return (
    <Definition>
    { RichText.render(richtext, linkResolver, htmlSerializer) }
    </Definition>
  )
}
