import React, { useState } from 'react'
import style from './User.module.css'

import { Navigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { removeItem } from '../../../../../core/services/storage/storage.services';
import { useGlobalState } from '../../../../../State/State';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';

const User = () => {
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [isClicked, setisClicked] = useState(false)
  const {t} = useTranslation();

  return (
    <div className={style.user}>
      {isLogin == false && <Navigate to="/auth/Login"/>}
      <img className={style.profile} src={userInfoObj.currentPictureAddress}></img>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={() => {
        setisClicked(!isClicked)
      }}>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {isClicked && <div className={style.userAccebility}>
        <div className={style.fixed}>
          <div className={style.holder}>
            <NavLink to="/Student-Panel/dashboard" className={style.items}> {t("Dashboard")} </NavLink>
          </div>
          <div className={style.holder}>
            <NavLink to="Student-Panel/My-Courses" className={style.items}> {t("myCourse")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="Student-Panel/My-Reserve" className={style.items}> {t("MyReservation")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="Student-Panel/Fav-Courses" className={style.items}> {t("FavoriteCourses")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="/Student-Panel/Fav-Blogs" className={style.items}> {t("FavoriteBlogs")} </NavLink>
          </div>
  
          <div className={style.holder}>
            <NavLink to="Student-Panel/Information" className={style.items}> {t("Profile")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="/Student-Panel/Shopping-Basket" className={style.items}> {t("Payments")} </NavLink>
          </div>

          <div className={style.holder}>
            <button onClick={() => {
              removeItem("token")
              setIsLogin(false)
              }} className={style.items}> {t("exit")} </button>
          </div>

        </div>
      </div>}
    </div>
  )
}

export {User}