import React from 'react'
import SerializeHTML from '../utils/serialize-html'
import s4 from '../utils/s4'
import { height } from 'window-size';

export default ({ node }) => (
  <ul>
  {   
    node.map(({ node: { slugs, data: { title, image } } }) => (
      <li key={s4()}>
        <a href={slugs[0]}>
          <img src={image.url} width='auto' height='200' />
          <p>{title[0].text}</p>
        </a>
      </li>   
    ))
  }
  </ul>
)

export const query = graphql`
  fragment AllArtworkFragment on PrismicDocument {
    slugs        
    data {
      title {
        text
      }
      image {            
        url
      }
    }
  }
`