import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    studioInfo,
    studioName,
  } from "./studio.module.css"

export const Studio = ({ studio, slug }) => {

  const logo = getImage(studio.studioFields.logo.localFile)

  return (
    <Link className={wrapper} to={slug}>
      <GatsbyImage
        className={image}
        image={logo}
        alt={studio.studioFields.logo.altText}
      />
      <div className={studioInfo}>
        <p className={studioName}>
          {studio.studioFields.name}
        </p>
      </div>
    </Link>
  )
}

export default Studio;

/*
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  wrapper,
  image,
  artistInfo,
  artistName,
  fullName,
} from "./studio.module.css"
  
export const Studio = ({ studio, slug }) => {
  
  const logo = getImage(studio.studioFields.logo.localFile)

  return (
  
    <Link className={wrapper} to={slug}>
    <GatsbyImage className={image}
      image={logo}
      alt={studio.studioFields.logo.altText}
    />
    <div className={artistInfo}>
      {studio.studioFields.name && (
        <p>{studio.studioFields.name}</p>
      )}
    </div>
  </Link>

  )
}

export default Studio;
*/