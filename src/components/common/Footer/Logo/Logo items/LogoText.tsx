import React from 'react'
import BahrAc from '../../../../../assets/Images/BahrAcText.png'
import style from '../../../../../Style/LogoText.module.css'

const LogoText = () => {
  return (
    <img className={style.text} src={BahrAc}/>
  )
}

export {LogoText}