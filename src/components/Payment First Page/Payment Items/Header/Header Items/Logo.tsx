import React from 'react'
import style from './Items.module.css'
import logo from '../../../../../assets/Images/BahrAcTextAndImage.png'

const Logo = () => {
  return (
    <>
        <img className={style.logo} src={logo} />
    </>
  )
}

export {Logo}