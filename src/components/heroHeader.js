import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content"/> 
          Dario grew up in a family of entrepreneurs in the north of Italy, which nurtured his curiosity towards innovation, technology, and emerging trends. <br/> <br/> He studied in one of the largest Italian Innovation Hubs and worked in a Global Fortune 500 company. These experiences fostered the creation of an open-minded and risk-taker guy, who believes in the power of "doing what is right, not what is easy"

        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)