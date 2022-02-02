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
            <div class="button">
              <svg viewbox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="512" height="512">
                <path fill="#3cf" d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
              </svg>
            </div>
          </a>
        </li>
      </ul>
      </div>
        <p>&copy; {new Date().getFullYear()} Dario Scalabrin &bull; Made with <span role="img" aria-label="love">❤️</span> by <a href="https://www.linkedin.com/in/scalabrindario/">Dario Scalabrin</a></p>
      </footer>
    </div>
  )
}
