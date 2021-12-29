import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Studio from "../../components/studio"
import {
  hero,
  section,
  subtitle,
  studios,
  description,
} from "../../page.module.css"

const StudiosPage = ({data: {
    allWpStudio: { edges: studioInfo }, 
    wpPage: { studioPageFields },
  },
  }) => {

  console.log(studioPageFields, studioInfo)

  const logo = getImage(studioPageFields.headerStudios.picture.localFile)

  return (
    <Layout pageTitle="World famous Anime Studios">
      
    <GatsbyImage
        className={hero}
        image={logo}
        alt={studioPageFields.headerStudios.picture.altText}
      />

      <div className={section}>
        <h2 className={subtitle}>{studioPageFields.headerStudios.title}</h2>
        <div className={description}
          dangerouslySetInnerHTML={{
            __html: studioPageFields.headerStudios.description,
          }}
        />
        <div className={studios}>
          {studioInfo.map(({ node: studio }) => (
            <Studio key={studio.id} slug={studio.slug} studio={studio} />
          ))}
        </div>
      </div>
            
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "studios"}) {
      studioPageFields {
        fieldGroupName
        headerStudios {
          description
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData (
                  avifOptions: {quality: 100}
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                )
              }
            }
            altText
          }
        }
      }
    }
    allWpStudio {
      edges {
        node {
          studioFields {
            name
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: false})
                }
              }
              altText
            }
          }
          slug
          id
        }
      }
    }
  }
`

export default StudiosPage