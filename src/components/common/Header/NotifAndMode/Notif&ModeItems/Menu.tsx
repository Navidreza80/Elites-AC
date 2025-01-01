import {useId, useState} from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Menu = () => {
  const [show, setShow] = useState(1)
  const { t } = useTranslation();
  const showMenu = () => {
    const mainMenu = document.getElementById('mainMenu')
    if (show == 1) {
      setShow(2);
      mainMenu.style.left = "0px";
      mainMenu.style.visibility = "visible";
    }
    else if (show == 2) {
      setShow(1);
      mainMenu.style.left = "-1000px";
      mainMenu.style.visibility = "hidden";
    }
  }


  return (
    <div onClick={showMenu} className={style.menu}>
      <div id="mainMenu" className={style.mainMenu} >
        <div className={style.header}>
          <div onClick={showMenu} className={style.closeBtn}></div>
          <div className={style.holder}>
          <div className={style.logoText}></div>
          <div className={style.logoImage}></div>
          </div>
        </div>
        <div className={style.content}>
          <NavLink to="/" className={style.nav}> {t("home")} </NavLink>
          <NavLink to="/Courses-List" className={style.nav} > {t("courses")} </NavLink>
          <NavLink to="/Blogs-List" className={style.nav} > {t("blogs")} </NavLink>
          <NavLink to="/about-We" className={style.nav} > {t("aboutUs")} </NavLink>
          <NavLink to="/" className={style.nav} > {t("contactUs")} </NavLink>
        </div>
        <div className={style.footer}>
          <div className={style.twitter}></div> 
          <div className={style.youtube}></div>
          <div className={style.telegram}></div>
          <div className={style.instagram}></div>
        </div>
      </div>
    </div>
  )
}

export {Menu}