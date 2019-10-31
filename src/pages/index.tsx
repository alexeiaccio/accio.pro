import * as React from 'react'
import { graphql } from 'gatsby'

import { Body } from '../components/body'
import { Layout } from '../components/layout'
import { Word } from '../components/word'
import { Page } from '../typings/page'

type Props = Readonly<{
  data: {
    prismicPage: Page
  }
}>

function IndexTemplate({ data }: Props) {
  const title = data.prismicPage.data.title.text
  const body = data.prismicPage.data.body

  return (
    <Layout>
      <Word word={title} />
      <Body body={body} />
    </Layout>
  )
}

export default IndexTemplate

export const query = graphql`
  query IndexQuery {
    prismicPage(uid: {eq: "index"}) {
      uid
      data {
        title {
          text
        }
        body {
          ... on PrismicPageBodyWorks {
            items {
              work {
                uid
                document {
                  ... on PrismicWork {
                    data {
                      title {
                        text
                      }
                      theme
                      image {
                        alt
                        url
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 1920, quality: 80) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPageBodyText {
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPageBodyImageGallery {
            items {
              galleryimage {
                alt
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              gallerycaptions {
                html
              }
            }
          }
        }
      }
    }
  }
`
