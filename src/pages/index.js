import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import AccioSVG from '../components/Accio/AccioSVG'

const MailMe = styled.a`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 3rem;
  color: #000;
  text-decoration: none;
  transition: all .6 ease-in-out;
  &:hover {
    color: cyan;
  }
`

const IndexPage = ({ data: { homepage: { data } } }) => { 
  return (
    <Fragment>
      <Helmet
        title={data.title[0].text}
        meta={[
          { name: 'description', content: data.seodescription },
          { name: 'keywords', content: data.seokeywords },
        ]}
      />
      <AccioSVG />
      <MailMe href='mailto:ciao@accio.pro'>
        ciao@accio.pro
      </MailMe>
    </Fragment>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    homepage: prismicDocument(type: {eq: "homepage"}) {
      data {
        title {
          text
        }
        seodescription
        seokeywords
      }
    }
  }
`