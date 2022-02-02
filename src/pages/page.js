import React from "react"
import Helmet from 'react-helmet';
import { graphql, withPrefix, Link  } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const NewPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src={withPrefix('script.js')} type="text/javascript"></script>



      </Helmet>
    </Layout>
  )
}

export default NewPage
export const NewPageQuery = graphql`
  query NewPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
