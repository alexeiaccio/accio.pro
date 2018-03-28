import React from 'react'
import Link from 'gatsby-link'
import Title from '../components/Title'
import Description from '../components/Description'

const IndexPage = ({ data }) => {
  const node = data.allPrismicDocument.edges[0].node
  return (
    <div>
    <Title data={node.data} />
    <Description data={node.data} />
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
          ...TitleFragment
          ...DescriptionFragment
        }
      }
    }
  }
`