import React from 'react'
import style from './Bottom.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Bottom = () => {

  const {t} = useTranslation();
  return (
    <div className={style.bottom} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("headerDescCoursesList1")} <br /> {t("headerDescCoursesList2")}</div>
  )
}

export {Bottom}