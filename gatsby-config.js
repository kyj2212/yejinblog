module.exports = {
  siteMetadata: {
    title: "Yejin First Gatsby Site",
    description: "예진의 첫 블로그입니다.",
    siteUrl: `https://yejinblog.gtsb.io/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    
  ],
}
