import React from 'react'
import style from './Image.module.css'
import amoozesh from "../../../../../../../assets/Images/amoozesh.png"

const Image = () => {
  return (
    <img className={style.image} src={amoozesh} />
  )
}

export {Image}