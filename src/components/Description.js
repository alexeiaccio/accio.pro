import React from 'react'
import SerializeHTML from '../utils/serialize-html'
import s4 from '../utils/s4'

export default ({ data: { description } }) => (
  <div>
  {
    description.map(({ richtext }) => (
      <p key={s4()} dangerouslySetInnerHTML={{__html: SerializeHTML(richtext)}} />   
    ))
  }
  </div>
)

export const query = graphql`
  fragment DescriptionFragment on PrismicDocument {
    data {
      description {
        richtext {              
          type
          text
          spans {
            start
            end
            type
            data {
              url
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
`