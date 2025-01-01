import React from 'react'
import style from './TeachersItems.module.css'

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Button = () => {
  const {t} = useTranslation();

  return (
    <NavLink to="/teacher-page" className={style.button} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("TeachersPageTitle")}</NavLink>
  )
}

export {Button}