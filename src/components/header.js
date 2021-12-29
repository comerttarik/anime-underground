import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{ data.site.siteMetadata.title }</h1>
    </header>
  )
}

export default Header