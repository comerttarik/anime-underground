import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const StudioPage = ({data: {wpStudio: {studioFields: studio}}}) => {
  
  const image = getImage(studio.logo.localFile)
  const imageCover = getImage(studio.mostSuccessfulAnime.animeCover.localFile)

  return (
    <Layout pageTitle="Studio">
    <div>
      <p>Name: {studio.name}</p>
      <GatsbyImage image={image} alt={studio.logo.sourceUrl} />
      <br/>
      <br/>
      <div dangerouslySetInnerHTML={{__html: studio.description}} />
      <p>Founded: {studio.founded}</p>
      <p>Founders: {studio.founders}</p>
      <p>Headquarters: {studio.headquarters}</p>
      <p>key people: {studio.keyPeople}</p>
      <p>Number of employees: {studio.numberOfEmployees}</p>
      <p>Net income: {studio.netIncome}</p>
      <p>Website: <a href={studio.website}>{studio.website}</a></p>
    </div>
    <div>
      <h1>Most successfull Anime</h1>
      <p>Name: {studio.mostSuccessfulAnime.name}</p>
      <GatsbyImage image={imageCover} alt={studio.mostSuccessfulAnime.animeCover.altText} />
      <p>Episodes: {studio.mostSuccessfulAnime.episodes}</p>
      <p>Duration: {studio.mostSuccessfulAnime.duration}</p>
      <p>Aired: {studio.mostSuccessfulAnime.aired}</p>
      <p>Producers: {studio.mostSuccessfulAnime.producers}</p>
      <p>Genre: {studio.mostSuccessfulAnime.genre}</p>
      <p>Rating: {studio.mostSuccessfulAnime.rating}</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpStudio(id: {eq: $id}) {
        studioFields {
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            sourceUrl
          }
          name
          description
          founded
          founders
          headquarters
          keyPeople
          netIncome
          numberOfEmployees
          website
          mostSuccessfulAnime {
            rating
            producers
            name
            genre
            fieldGroupName
            episodes
            duration
            aired
            animeCover {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
                }
              }
              altText
            }
          }
        }    
    }
  }
`

export default StudioPage