import React from 'react'
import style from '../../../../Style/HolderFooter.module.css'
import { SocialMedias } from '../SocialMedias/SocialMediasHolder/SocialMedias'
import { Logo } from '../Logo/LogoHolder/Logo'
import { NavBarHolder } from '../NavBar/NavBarHolder/NavBarHolder'
import { NavBarHolderRes } from '../NavBarRes/NavBarHolder/NavBarHolder'

import { identifier } from '../../../../core/services/Functions/ThemeIdentifier'
const HolderFooter = () => {


  return (
    <>
    <div className={style.footerFix} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
        <div className={style.footerContainer} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
            <NavBarHolderRes />
            <SocialMedias />
            <NavBarHolder />
            <Logo />
        </div>
    </div>
    </>
  )
}

export {HolderFooter};