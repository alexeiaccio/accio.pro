const path = require('path')
const get = require('lodash/get')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const query = await graphql(`
    {
      allPrismicPage(filter: {uid: {ne: "index"}}) {
        nodes {
          uid
        }
      }
      allPrismicWork {
        nodes {
          uid
        }
      }
    }
  `)

  const pages = get(query, 'data.allPrismicPage.nodes')
  const works = get(query, 'data.allPrismicWork.nodes')

  const pageMaker = (data, type) => {
    data.map((node) => {
      const { uid } = node
      createPage({
        component: path.resolve(`src/templates/${type}.tsx`),
        context: {
          slug: uid,
        },
        path: uid,
      })
    })
  }

  pages && pageMaker(pages, 'page')
  works && pageMaker(works, 'work')
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      targets: {
        browsers: ['>0.25%', 'not dead'],
      },
    },
  })
  actions.setBabelPreset({
    name: '@emotion/babel-preset-css-prop',
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
	const config = getConfig()
	config.node = {
		fs: 'empty',
	}
	actions.replaceWebpackConfig(config)
}
