import React from 'react'
import style from './Top.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Top = () => {

  const {t} = useTranslation();
  return (
    <div className={style.top} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("headerTitleCoursesList")}</div>
  )
}

export {Top}