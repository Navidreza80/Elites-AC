import React from 'react'
import style from './Image.module.css'
import rahnamaiee from "../../../../../../../assets/Images/rahnamaiee.png"

const Image = () => {
  return (
    <img className={style.image} src={rahnamaiee} />
  )
}

export {Image}