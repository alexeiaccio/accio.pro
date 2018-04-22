import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import baseStyles from './base-styles'

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet
      title='Accio'
      meta={[
        { name: 'description', content: 'Accio' },
        { name: 'keywords', content: 'Accio' },
      ]}
    />
    { baseStyles() }
    <Fragment>
      { children() }
    </Fragment>
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
