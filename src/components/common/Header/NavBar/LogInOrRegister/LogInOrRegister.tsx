import React from 'react'
import style from '../../../../../Style/LogInOrRegister.module.css'
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const LogInOrRegister = () => {
  const {t} = useTranslation();

  return (
    <NavLink to="/auth/Login" className={style.container} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("LoginOrRegister")}</NavLink>
  )
}

export { LogInOrRegister };