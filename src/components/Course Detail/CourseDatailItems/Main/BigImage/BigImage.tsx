import React from 'react'
import style from './BigImage.module.css'

const BigImage = ({image}) => {
  return (
    <img src={image && image.slice(0, 4) == "http" && image != "null" ? image : "https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg"} className={style.image} />
  )
}

export {BigImage}