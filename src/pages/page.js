import React from "react"
import Helmet from 'react-helmet'
import { withPrefix, Link, graphql } from "gatsby"
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
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js></script>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
        <div class="ag-timeline-block">
        <div class="ag-timeline_title-box">
        </div>
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
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                          vel, aliquet nec, vulputate eget, arcu.
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
                          Donec pede justo, fringilla
                          vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                          nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2020</div>
                    </div>
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 11</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-11.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 11</div>
                        <div class="ag-timeline-card_desc">
                          Aenean imperdiet. Etiam ultricies
                          nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                          hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                          sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                          eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 10</div>
                    </div>
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2019</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-10.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 10</div>
                        <div class="ag-timeline-card_desc">
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                          vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                          tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2019</div>
                    </div>
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 9</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-9.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 9</div>
                        <div class="ag-timeline-card_desc">
                          Vivamus elementum semper nisi. Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                          nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
                          nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 8</div>
                    </div>
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2018</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-8.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 8</div>
                        <div class="ag-timeline-card_desc">
                          Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                          vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                          tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2018</div>
                    </div>
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 7</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-7.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 7</div>
                        <div class="ag-timeline-card_desc">
                          Quisque rutrum. Aenean imperdiet. Etiam ultricies
                          nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                          hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 6</div>
                    </div>
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2017</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-6.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 6</div>
                        <div class="ag-timeline-card_desc">
                          Vivamus elementum semper nisi. Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                          nulla ut metus varius laoreet. Quisque rutrum.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2017</div>
                    </div>
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 5</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-5.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 5</div>
                        <div class="ag-timeline-card_desc">
                          Donec pede justo, fringilla
                          vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                          nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
                          nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 4</div>
                    </div>
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2016</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-4.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 4</div>
                        <div class="ag-timeline-card_desc">
                          Nullam dictum felis eu pede mollis pretium. Integer
                          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                          nulla ut metus varius laoreet.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2016</div>
                    </div>
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 3</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-3.png" class="ag-timeline-card_img" width="640" height="360" alt="" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 3</div>
                        <div class="ag-timeline-card_desc">
                          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                          hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                          sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                          eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 2</div>
                    </div>
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2015</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-2.png" class="ag-timeline-card_img" width="640" height="360" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 2</div>
                        <div class="ag-timeline-card_desc">
                          Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                          nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
                          nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div class="ag-timeline-card_point">2015</div>
                    </div>
                    <div class="ag-timeline-card_meta-box">
                      <div class="ag-timeline-card_meta">Season 1</div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-1.png" class="ag-timeline-card_img" width="640" height="360" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 1</div>
                        <div class="ag-timeline-card_desc">
                          Donec pede justo, fringilla
                          vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
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
export const pageQuery = graphql`
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
