import React from 'react'
import style from './Image.module.css'
import estedad from "../../../../../../../assets/Images/estedad.png"

const Image = (props) => {
  return (
    <img className={style.image} src={estedad} />
  )
}

export {Image}