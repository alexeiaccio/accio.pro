import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { AccioSVG } from 'Elements'


import favicon from './favicon.png'

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
      <AccioSVG />
    </Fragment>
  )
}

export default IndexPage
