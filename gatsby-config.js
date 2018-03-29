module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `accio`,
        accessToken: `MC5Xcm53OWlVQUFOVUlCWm1X.77-977-9Y3zvv73vv71977-9Q--_vXXvv73vv70b77-9RCPvv73vv73vv702UO-_vWkHd--_ve-_ve-_ve-_ve-_vWA`,
      },
    },
  ],
};
