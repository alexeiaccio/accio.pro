import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { MainPage } from 'Blocks'
import { LangSwitcher } from 'Elements'

import favicon from './favicon.png'

const EnPage = ({ data: { homepage: { data }, whatis: { edges } } }) => {
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
      <MainPage {...{data}} whatis={edges} />
      <LangSwitcher to="ru" />
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
                uid
                lang
                isBroken
                type
              }
            }
          }
        }
        maillink {
          url
        }
        definitionget
        definitionverbs {
          type
          text
        }
        definitionadjectives {
          type
          text
        }
        definitionnouns {
          type
          text
        }
        seotitle
        seodescription
        seokeywords
      }
    }
    whatis: allPrismicDocument(filter: {type: {eq: "whatis"}, lang: {eq: "en-us"}}) {
      edges {
        node {
          uid
          data {
            title {
              type
              text
            }
            description {
              text
              type
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
        }
      }
    }
  }
`