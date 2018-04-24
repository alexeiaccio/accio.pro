import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import {
  AccioSVG,
  MailLink
} from 'Elements'

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
      <MailLink url={data.maillink.url} />
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
        maillink {
          url
        }
        seodescription
        seokeywords
      }
    }
  }
`