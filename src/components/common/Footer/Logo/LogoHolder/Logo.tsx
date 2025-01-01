import React from 'react'
import style from './Logo.module.css'
import { LogoImage } from '../Logo items/LogoImage'
import { LogoText } from '../Logo items/LogoText'

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <LogoText />
      <LogoImage />
    </div>
  )
}

export {Logo};