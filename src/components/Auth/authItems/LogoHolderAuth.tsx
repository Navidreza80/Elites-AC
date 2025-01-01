import React from 'react'
import  styleLogin  from "./../Auth.module.css";
import { Outlet } from 'react-router-dom';

const LogoHolderAuth = () => {
    return (
        <div className={styleLogin.logoHolder}>
            <div className={styleLogin.logo}></div>
        </div>
    )
}

export {LogoHolderAuth}