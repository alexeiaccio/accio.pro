const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const artworkTemplate = path.resolve('src/templates/artwork-template.js')

    resolve(
      graphql(
        `
        {
          allPrismicDocument(filter: {type: {eq: "artwork"}}) {
            edges {
              node  {
                slugs
                data {
                  title {
                    type
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
                          url
                          target
                        }
                      }
                      url
                      dimensions {
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if(result.errors) {
          reject(result.errors)
        }

        result.data.allPrismicDocument.edges.forEach(({ node }) => {
          const path = node.slugs[0]
          createPage({
            path,
            component: artworkTemplate,
          })
        })
      })
    )
  })
}