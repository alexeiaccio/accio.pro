import React from 'react'
import Link from 'gatsby-link'
import Title from '../components/Title'
import Description from '../components/Description'
import AllArtwork from '../components/AllArtwork'

const IndexPage = ({ data }) => {
  const homepage = data.homepage.edges[0].node
  const artworks = data.artworks.edges
  return (
    <div>
    <Title data={homepage.data} />
    <Description data={homepage.data} />
    <AllArtwork node={artworks} />
    <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    homepage: allPrismicDocument(filter: {type: {eq: "homepage"}}) {
      edges {
        node {
          ...TitleFragment
          ...DescriptionFragment
        }
      }
    }
    artworks: allPrismicDocument(filter: {type: {eq: "artwork"}}) {
      edges {
        node {
          ...AllArtworkFragment
        }
      }
    }
  }
`