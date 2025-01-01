import React from 'react'
import  styleLogin  from "./Auth.module.css";
import  {TextWelcomeAuth}  from "./authItems/textWelcomeAuth";
import  {LaptopImgAuth}  from "./authItems/laptopImgAuth";
import  {LogoHolderAuth}  from "./authItems/LogoHolderAuth";
import { Outlet } from 'react-router-dom';

import { identifier } from '../../core/services/Functions/ThemeIdentifier';

const Auth = () => {
  
    return (
        <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={styleLogin.main}>
            <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={styleLogin.page}>
                <div data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.page2}> 
                    <LogoHolderAuth />
                    <TextWelcomeAuth />
                    <LaptopImgAuth />
                </div>
                <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={styleLogin.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export {Auth}