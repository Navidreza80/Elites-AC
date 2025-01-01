import React from 'react'
import { NavBarItems } from '../NavBarItems/NavBarItems'
import style from './NavBarHolder.module.css'

const NavBarHolderRes = () => {
  return (
    <>
        <div className={style.NavBar}>
            <NavBarItems />
        </div>
    </>
  )
}

export {NavBarHolderRes}