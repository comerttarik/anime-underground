import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  studioName,
  fullName,
  studioRoles,
  studioDescription,
  studioInfo,
  studioPictures,
  studioPicture,
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
          {studio.name && <h3 className={studioName}>Studio</h3>}
          <h1 className={fullName}>{studio.name}</h1>
          <div className={studioDescription} dangerouslySetInnerHTML={{__html: studio.description}} />
          <p><span className={studioInfo}>Founded:</span> {studio.founded}</p>
          <p><span className={studioInfo}>Founders:</span> {studio.founders}</p>
          <p><span className={studioInfo}>Headquarters:</span> {studio.headquarters}</p>
          <p><span className={studioInfo}>key people:</span> {studio.keyPeople}</p>
          <p><span className={studioInfo}>Number of employees:</span> {studio.numberOfEmployees}</p>
          <p><span className={studioInfo}>Net income:</span> {studio.netIncome}</p>
          <p><span className={studioInfo}>Website:</span> <a href={studio.website}>{studio.website}</a></p>
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
            {studio.mostSuccessfulAnime.name && <h3 className={studioName}>Most successfull Anime</h3>}
            {/*
            <div className={studioRoles}>
              {genres.map((genre, i) => (
                <span key={i}>
                  {genre.name} {i + 1 < genre.length && "- "}
                </span>
              ))}
            </div>*/}
            <h1 className={fullName}>{studio.mostSuccessfulAnime.name}</h1>
            <p><span className={studioInfo}>Episodes:</span> {studio.mostSuccessfulAnime.episodes}</p>
            <p><span className={studioInfo}>Duration:</span> {studio.mostSuccessfulAnime.duration}</p>
            <p><span className={studioInfo}>Aired:</span> {studio.mostSuccessfulAnime.aired}</p>
            <p><span className={studioInfo}>Producers:</span> {studio.mostSuccessfulAnime.producers}</p>
            <p><span className={studioInfo}>Genre:</span> {studio.mostSuccessfulAnime.genre}</p>
            <p><span className={studioInfo}>Rating:</span> {studio.mostSuccessfulAnime.rating}</p>
        </div>
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className={studioPictures}>
        <GatsbyImage className={studioPicture} image={picture1} alt={studio.pictures.picture1.localFile} />
        <GatsbyImage className={studioPicture} image={picture2} alt={studio.pictures.picture2.localFile} />
        <GatsbyImage className={studioPicture} image={picture3} alt={studio.pictures.picture3.localFile} />
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