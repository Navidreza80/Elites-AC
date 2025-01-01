import React from 'react'
import style from '../../../../../Style/LogoImage.module.css'
import BahrAc  from '../../../../../assets/Images/BahrAcImg.png'

const LogoImage = () => {
  return (
    <img className={style.image} src={BahrAc}/>
  )
}

export {LogoImage}