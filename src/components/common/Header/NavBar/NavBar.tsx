import React from 'react'
import { NavBarItems } from './NavBarItems/NavBarItems.tsx'
import { LogInOrRegister } from './LogInOrRegister/LogInOrRegister.tsx'
import style from '../../../../Style/NavBar.module.css'

import { User } from './NavBarItems/User.tsx'
import { getItem } from '../../../../core/services/storage/storage.services.ts'
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier.ts'
import { useGlobalState } from '../../../../State/State.tsx'
const NavBar = () => {
  
    const [isLogin, setIsLogin] = useGlobalState('isLogin');

    return (
        <div className={style.container} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
            { isLogin === true ? <User /> : <LogInOrRegister />}
            <NavBarItems />
        </div>
    )
}

export {NavBar}