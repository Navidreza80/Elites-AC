import React from 'react'
import style from './Bottun.module.css'

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Bottun = () => {
  const {t} = useTranslation();

  return (
    <NavLink to="/Courses-list" className={style.Button} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}> {t("NewCourses")} </NavLink>
  )
}

export {Bottun};