import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import {
  AccioSVG,
  MailLink
} from 'Elements'

import favicon from './favicon.png'

const EnPage = ({ data: { homepage: { data } } }) => {
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
      <AccioSVG />
      <MailLink
        url={data.maillink.url}
        definitions={{
          want: data.definitionswant,
          sites: data.definitionssites,
          list: data.definitionslist
        }}
      />
    </Fragment>
  )
}

export default EnPage

export const query = graphql`
  query EnQuery {
    homepage: prismicDocument(type: {eq: "homepage"}, lang: {eq: "en-us"}) {
      data {
        title {
          text
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