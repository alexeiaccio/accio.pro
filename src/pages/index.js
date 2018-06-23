import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { MainPage } from 'Blocks'

import favicon from './favicon.png'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100wv;
`

const IndexPage = ({ data: { homepage: { data } } }) => {
  return (
    <Fragment>
      <Helmet
        title={data.seotitle}
        meta={[
          { name: 'description', content: data.seodescription },
          { name: 'keywords', content: data.seokeywords },
        ]}
      >
        <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
      </Helmet>
      <MainPage {...{data}} />
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
          }
        }
        maillink {
          url
        }
        definitionswant
        definitionssites
        definitionslist {
          text
        }
        seotitle
        seodescription
        seokeywords
      }
    }
  }
`