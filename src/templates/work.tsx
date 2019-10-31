import React from 'react'
import { graphql } from 'gatsby'

import { Body } from '../components/body/work'
import { Layout } from '../components/layout'
import { WordSVG } from '../components/word/svg'
import { Work } from '../typings/work'

type Props = Readonly<{
  data: {
    prismicWork: Work
  }
}>

function WorkTemplate({ data }: Props) {
  const title = data.prismicWork.data.title.text
  const theme = data.prismicWork.data.theme
  const body = data.prismicWork.data.body
  const image = data.prismicWork.data.image

  return (
    <Layout>
      <h1 className="mb-10">
        <WordSVG
          image={image}
          word={title}
          theme={theme}
        />
      </h1>
      <Body body={body} />
    </Layout>
  )
}

export default WorkTemplate

export const query = graphql`
  query WorkQuery($slug: String!) {
    prismicWork(uid: {eq: $slug}) {
      uid
      data {
        title {
          text
        }
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
        theme
        body {
          ... on PrismicWorkBodyText {
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicWorkBodyImageGallery {
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
