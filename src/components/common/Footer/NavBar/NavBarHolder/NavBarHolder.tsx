import React from 'react'
import { NavBarItems } from '../NavBarItems/NavBarItems'
import style from './NavBarHolder.module.css'

const NavBarHolder = () => {
  return (
    <>
        <div className={style.NavBar}>
            <NavBarItems />
        </div>
    </>
  )
}

export {NavBarHolder}