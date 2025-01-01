import React from 'react'
import style from './Header.module.css'
import { Logo } from '../Items/Logo'
import { Title } from '../Items/Title'
import { Logo2 } from '../Items/Logo2'

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.fixHeader}>
            <Logo />
            <Title />
            <Logo2 />
        </div>
    </div>
  )
}

export {Header}