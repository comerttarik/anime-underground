import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const StudiosPage = ({data: {allWpStudio: {edges}}}) => {
  return (
    <Layout pageTitle="World famous Anime Studios">
    {edges.map((item) => {
      const studio = item.node.studioFields;
      const slug = item.node.slug;
      return <Link to={`/studios/${slug}`}><p key={item.node.id}>{studio.name}</p></Link>
    })}
    </Layout>
  )
}

export const query = graphql`
query {
  allWpStudio {
    edges {
      node {
        id
        slug
        studioFields {
          name
        }
      }
    }
  }
}
`

export default StudiosPage