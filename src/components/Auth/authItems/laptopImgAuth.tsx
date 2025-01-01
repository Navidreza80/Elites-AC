import React from 'react'
import  styleLogin  from "./../Auth.module.css";
import { Outlet } from 'react-router-dom';

const LaptopImgAuth = () => {
    return (
        <div className={styleLogin.laptopHolder}>
            <div className={styleLogin.laptop}></div>
        </div>
    )
}

export {LaptopImgAuth}