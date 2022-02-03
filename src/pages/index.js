import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
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
      </Helmet>
      <HeroHeader/>
            <section class="timeline">
          <div class="container">
              <div class="timeline__wrapper">
                  <div class="timeline__progressbar"></div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">January 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">February 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">March 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">April 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
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
