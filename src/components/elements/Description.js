import React, { Fragment } from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

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
  display: inline-block;
  left: 5rem;
  max-width: 64rem;
  padding: 3rem;
  position: fixed;
  right: 5rem;
  top: 5rem;
  z-index: 3000;
  box-shadow: 0px 0px 20px #2FC2C2;
`

const Close = styled.span`
  color: black;
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  right: 1rem;
  top: .5rem;
`

const withToggle = compose(
  withState('toggledOn', 'toggle', false),
  withHandlers({
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  })
)

const Tooltip = withToggle(({ text, children, toggledOn, toggle }) => (
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
