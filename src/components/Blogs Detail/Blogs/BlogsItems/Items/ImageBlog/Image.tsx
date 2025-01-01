import React from 'react'
import style from './Image.module.css'
import { NavLink } from 'react-router-dom'

const Image = (props) => {
  return (
    <NavLink to={"/Course-Detail/" +props.id} className={style.holderImage}>
      <img className={style.imageProgramming} src={props.image && props.image.slice(0,5) == "https" && props.image !== null ? props.image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
    </NavLink>
  )
}

export {Image}