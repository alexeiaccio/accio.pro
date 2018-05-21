import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import {
  AccioSVG,
  MailLink
} from 'Elements'

import favicon from './favicon.png'

const EnUsPage = ({ data: { homepage: { data }, enus } }) => {
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
          sites: enus.data.definitionssites,
          list: enus.data.definitionslist
        }}
      />
    </Fragment>
  )
}

export default EnUsPage

export const query = graphql`
  query EnUsQuery {
    homepage: prismicDocument(type: {eq: "homepage"}) {
      data {
        title {
          text
        }
        maillink {
          url
        }
        definitionssites
        definitionslist {
          text
        }
        seotitle
        seodescription
        seokeywords
      }
    }
    enus: prismicDocument(lang: {eq: "en-us"}) {
      data {
        definitionssites
        definitionslist {
          text
        }
      }
    }
  }
`