import React, { Fragment, Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import baseStyles from './base-styles'

class TemplateWrapper extends Component {

  componentDidMount = () => {
    const language = window.navigator.userLanguage || window.navigator.language
    language.includes('en') && navigateTo('/en')
    language.includes('ru') && navigateTo('/')
  }

  render() {
    const { children } = this.props
    return (
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
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
