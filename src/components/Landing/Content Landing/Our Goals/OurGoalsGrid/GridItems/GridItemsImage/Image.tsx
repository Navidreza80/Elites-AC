import React from 'react'
import style from './Image.module.css'
import kar from "../../../../../../../assets/Images/kar.png"

const Image = () => {
  return (
    <img className={style.image} src={kar} />
  )
}

export {Image}