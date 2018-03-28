import React from "react"

export default ({ data: { title } }) => (
  <div>
    <h1>
      {title[0].text}
    </h1>
  </div>
)

export const query = graphql`
  fragment TitleFragment on PrismicDocument {
    data {
      title {
        text
      }     
    }
  }
`