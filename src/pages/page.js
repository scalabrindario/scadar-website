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
        <script src={withPrefix('../static/script.js')} type="text/javascript"></script>



      </Helmet>
        <div class="ag-timeline-block">
          <section class="ag-section">
            <div class="ag-format-container">
              <div class="js-timeline ag-timeline">
                <div class="js-timeline_line ag-timeline_line">
                  <div class="js-timeline_line-progress ag-timeline_line-progress"></div>
                </div>
                <div class="ag-timeline_list">


                  <div class="js-timeline_item ag-timeline_item">
                    <div class="ag-timeline-card_box">
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2021</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 13</div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_item">
                      <div class="ag-timeline-card_inner">
                        <div class="ag-timeline-card_img-box">
                          <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png" class="ag-timeline-card_img" width="640" height="360" />
                        </div>
                        <div class="ag-timeline-card_info">
                          <div class="ag-timeline-card_title">Season 13</div>
                          <div class="ag-timeline-card_desc">
                            xxxxx
                          </div>
                        </div>
                      </div>
                      <div class="ag-timeline-card_arrow"></div>
                    </div>
                  </div>

                  

                  <div class="js-timeline_item ag-timeline_item">
                    <div class="ag-timeline-card_box">
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 12</div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2020</div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_item">
                      <div class="ag-timeline-card_inner">
                        <div class="ag-timeline-card_img-box">
                          <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                        </div>
                        <div class="ag-timeline-card_info">
                          <div class="ag-timeline-card_title">Season 12</div>
                          <div class="ag-timeline-card_desc">
                            xxxxx
                          </div>
                        </div>
                      </div>
                      <div class="ag-timeline-card_arrow"></div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </section>
        </div>
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
