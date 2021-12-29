import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  studios,
} from "../page.module.css"
import Studio from "../components/studio"

const IndexPage = ({
  data: {
    wpPage: { homePageFields },
  },
}) => {
  const image = getImage(homePageFields.headerHome.picture.localFile)

  return (
    <Layout>


      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePageFields.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePageFields.callToAction.link}>
            {homePageFields.callToAction.linkText}
          </a>
        </div>
        <div>
          <GatsbyImage 
            image={image}
            className={headerPicture}
            alt={homePageFields.headerHome.picture.altText}
          />
        </div>
      </div>
      
      <div className={section}>
          <h2 className={subtitle}>{homePageFields.featuredStudios.title}</h2>
          <p>{homePageFields.featuredStudios.description}</p>
          <div className={studios}>
              {homePageFields.featuredStudios.studios.map(studio => (
              <Studio slug={`studios/${studio.slug}`} key={studio.id} studio={studio} />
              ))}
        </div>
      </div>

    </Layout>
  )
}

// Page Query
export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 900, height: 500)
            }
          }
        }
      }
      callToAction {
        link
        linkText
      }
      featuredStudios {
        studios {
          ... on WpStudio {
            id
            slug
            studioFields {
              name
              logo {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
                  }
                }
              }
            }
          }
        }
        title
        description
      }
    }
  }
}
`

export default IndexPage