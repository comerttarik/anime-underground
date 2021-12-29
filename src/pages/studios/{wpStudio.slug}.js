import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  artistName,
  fullName,
  artistRoles,
  artistDescription,
  artistInfo,
  artistPictures,
  artistPicture,
} from "../../page.module.css"

const StudioPage = ({
    data: 
      {wpStudio: {
        studioFields: studio,
        genres: { nodes: genres },
      } 
    }
  }) => {
  
  const image = getImage(studio.logo.localFile)
  const imageCover = getImage(studio.mostSuccessfulAnime.animeCover.localFile)

  const picture1 = getImage(studio.pictures.picture1.localFile)
  const picture2 = getImage(studio.pictures.picture2.localFile)
  const picture3 = getImage(studio.pictures.picture3.localFile)

  return (
    <Layout pageTitle="Studio">
      <div className={header}>
        <div className={headerInfo}>
          {studio.name && <h3 className={artistName}>Studio</h3>}
          <h1 className={fullName}>{studio.name}</h1>
          <div className={artistDescription} dangerouslySetInnerHTML={{__html: studio.description}} />
          <p><span className={artistInfo}>Founded:</span> {studio.founded}</p>
          <p><span className={artistInfo}>Founders:</span> {studio.founders}</p>
          <p><span className={artistInfo}>Headquarters:</span> {studio.headquarters}</p>
          <p><span className={artistInfo}>key people:</span> {studio.keyPeople}</p>
          <p><span className={artistInfo}>Number of employees:</span> {studio.numberOfEmployees}</p>
          <p><span className={artistInfo}>Net income:</span> {studio.netIncome}</p>
          <p><span className={artistInfo}>Website:</span> <a href={studio.website}>{studio.website}</a></p>
        </div>
        <GatsbyImage className={headerPicture} image={image} alt={studio.logo.sourceUrl} />
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="space"></div>
      <div className={header}>
        <GatsbyImage className={headerPicture} image={imageCover} alt={studio.mostSuccessfulAnime.animeCover.altText} />
        <div className={headerInfo}>
            {studio.mostSuccessfulAnime.name && <h3 className={artistName}>Most successfull Anime</h3>}
            {/*
            <div className={artistRoles}>
              {genres.map((genre, i) => (
                <span key={i}>
                  {genre.name} {i + 1 < genre.length && "- "}
                </span>
              ))}
            </div>*/}
            <h1 className={fullName}>{studio.mostSuccessfulAnime.name}</h1>
            <p><span className={artistInfo}>Episodes:</span> {studio.mostSuccessfulAnime.episodes}</p>
            <p><span className={artistInfo}>Duration:</span> {studio.mostSuccessfulAnime.duration}</p>
            <p><span className={artistInfo}>Aired:</span> {studio.mostSuccessfulAnime.aired}</p>
            <p><span className={artistInfo}>Producers:</span> {studio.mostSuccessfulAnime.producers}</p>
            <p><span className={artistInfo}>Genre:</span> {studio.mostSuccessfulAnime.genre}</p>
            <p><span className={artistInfo}>Rating:</span> {studio.mostSuccessfulAnime.rating}</p>
        </div>
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className={artistPictures}>
        <GatsbyImage className={artistPicture} image={picture1} alt={studio.pictures.picture1.localFile} />
        <GatsbyImage className={artistPicture} image={picture2} alt={studio.pictures.picture2.localFile} />
        <GatsbyImage className={artistPicture} image={picture3} alt={studio.pictures.picture3.localFile} />
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
        pictures {
          picture1 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture2 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture3 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      genres {
        nodes {
          name
        }
      }
    }
  }
`

export default StudioPage