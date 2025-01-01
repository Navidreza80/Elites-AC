import React from 'react'
import style from './style.module.css'
import NoImage from '../../../../../../../../assets/Images/NoImage.png'
import { NavLink } from 'react-router-dom'

const Image = ({image, id}) => {
  return (
    
    <NavLink to={"/Course-Detail/" +id} className={style.holderImage}>
       <img className={style.imageProgramming} src={image && image.slice(0,5) == "https" && image !== null ? image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
    </NavLink>
  )
}

export {Image}