import React from 'react'
import style from './style.module.css'
import { NavLink } from 'react-router-dom'

const Image = ({id, image}) => {
  return (
    <NavLink to={"/Course-Detail/" +id} className={style.holderImage}>
          <img className={style.imageProgramming} src={image && image.slice(0,5) == "https" && image !== null ? image : '/no_pic.jpg'} />
    </NavLink>
  )
}

export {Image}