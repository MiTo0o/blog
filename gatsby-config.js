module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Blog`,
    author: `Derzan Chiang`,
    description: `Derzan's Dev Blog`,
    social: [
      {
        name: `github`,
        url: `https://github.com/MiTo0o`,
      },
      {
        name: `website`,
        url: `https://derzan.dev/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: 'night-owl'
      },
    },
  ],
}
