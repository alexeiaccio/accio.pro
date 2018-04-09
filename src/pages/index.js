import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import Title from '../components/Title'
import Description from '../components/Description'
import AllArtwork from '../components/AllArtwork'
import WavePattern from '../components/WavePattern'

const Back = styled.div`
  position: relative;
  overflow: hidden;
  height: 75px;
  background: #000;
`

const shiftBack = keyframes`
  0% {
    left: -225px;
  }
  100% {
    left: 0px;
  }
`

const WaveBack = styled.div`
  position: absolute;
  width: 2250px;
  top: -75px;
  left: -225px;
  animation: ${shiftBack} 6s linear infinite;
  animation-play-state: paused;
  &:hover {
    animation-play-state: running;
  }
`

const IndexPage = ({ data }) => {
  const homepage = data.homepage.edges[0].node
  const artworks = data.artworks.edges
  return (
    <div>
    <Title data={homepage.data} />
    <Back>
      <WaveBack><WavePattern /></WaveBack>
    </Back>
    {/* <Description data={homepage.data} />
    <AllArtwork node={artworks} /> */}
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