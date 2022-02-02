import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
      <div>
      <ul class="soc">
        <li>        
          <a class="icon-10 facebook" href="https://www.facebook.com/dario.scalabrin" title="Facebook">
            <img class="social-button" src="https://img.icons8.com/material/512/000000/facebook--v1.png"/>
          </a>
        </li>

        <li>
          <a class="icon-15 instagram" href="http://instagram.com/scalabrindario/" title="Instagram">
            <img class="social-button" src="https://img.icons8.com/material-outlined/512/000000/instagram-new--v1.png"/>
          </a>
        </li>

        <li>
          <a class="icon-17 linkedin" href="http://linkedin.com/in/scalabrindario/" title="LinkedIn">
            <img class="social-button" src="https://img.icons8.com/ios-glyphs/512/000000/linkedin.png"/>
          </a>
        </li>
      </ul>
      </div>
        <p>&copy; {new Date().getFullYear()} Dario Scalabrin &bull; Made with <span role="img" aria-label="love">❤️</span> by <a href="https://www.linkedin.com/in/scalabrindario/">Dario Scalabrin</a></p>
      </footer>
    </div>
  )
}
