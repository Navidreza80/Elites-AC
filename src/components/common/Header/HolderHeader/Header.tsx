import React, { useState } from 'react';
import { NotifAndModeHolder } from '../NotifAndMode/Notif&ModeHolder/NotifAndModeHolder.tsx';
import { NavBar } from '../NavBar/NavBar.tsx';
import { Logo } from '../Logo/LogoHolder/Logo.tsx';
import style from '../../../../Style/Header.module.css'

import { identifier } from '../../../../core/services/Functions/ThemeIdentifier.ts';

const Header = () => {
    
    return (
        <div className={style.header} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
                <NotifAndModeHolder />
                <NavBar />
                <Logo />
        </div>
    )
}

export {Header};