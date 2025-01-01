import React from 'react'
import style from './Error.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const ErrorBottun = () => {
  const { t } = useTranslation();
  return (
    <NavLink to="/" className={style.homePage}> {t("ReturnMainPage")}  </NavLink>
  )
}

export {ErrorBottun}