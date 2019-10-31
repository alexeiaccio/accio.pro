module.exports = {
  siteMetadata: {
    title: 'Accio',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require('autoprefixer')],
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'accio-folio',
        accessToken: `MC5YYmJ4QXhBQUFDUUEzNTVa.NO-_vU7vv73vv71A77-977-977-9TO-_vSfvv71_77-9C1fvv71hdu-_ve-_ve-_ve-_vRPvv70x77-977-977-9cu-_vQ`,
        linkResolver: () => doc => doc.slug,
        schemas: {
          page: require('./src/schemas/page.json'),
          work: require('./src/schemas/work.json'),
        },
      },
    },
  ],
}
