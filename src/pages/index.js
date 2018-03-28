import React from 'react'
import Link from 'gatsby-link'
import SerializeHTML from '../utils/serialize-html'
import s4 from '../utils/s4'
import { head, last, props, map, chain, concat } from 'sanctuary'

const IndexPage = ({ data }) => {
  const title = chain(head, map(props(['node', 'data', 'title']), head(data.allPrismicDocument.edges)))
  const description = map(props(['node', 'data', 'description']))(head(data.allPrismicDocument.edges))
  const { type: titleType, text: titleText } = title.value
  const titleTag = concat(head(titleType), last(titleType)).value  
  
  return (
    <div>
    { React.createElement(titleTag, { className: 'title' }, titleText) }
    { 
      map(map((data) => (
        <p key={s4()} dangerouslySetInnerHTML={{__html: SerializeHTML(data).richtext}}/>)
      ), description).value 
    }
    <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allPrismicDocument(filter: {type: {eq: "homepage"}}) {
      edges {
        node {
          data {
            title {
              type
              text
            }
            description {
              richtext {
                type
                text
                spans {
                  start
                  end
                  type
                  data {
                    link_type
                    url
                    target
                  }
                }
                url
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`