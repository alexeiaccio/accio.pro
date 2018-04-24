const path = require('path')

// Customizing Webpack
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      root: path.resolve(__dirname),
      alias: {
        Blocks: 'src/components/blocks',
        Elements: 'src/components/elements',
        Helpers: 'src/components/helpers',
      },
      extensions: ['', '.js', '.jsx']
    }
  })
}