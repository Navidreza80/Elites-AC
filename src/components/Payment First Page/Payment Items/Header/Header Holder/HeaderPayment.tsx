import React from 'react'
import style from './HeaderPayment.module.css'
import { Logo } from '../Header Items/Logo'
import { BackBtn } from '../Header Items/BackBtn'

const HeaderPayment = () => {
  return (
    <div className={style.headerPayment}>
        <Logo />
        <BackBtn />
    </div>
  )
}

export {HeaderPayment}