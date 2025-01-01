import React from 'react'
import style from './TeachersItems.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Title = () => {
  const {t} = useTranslation();

  return (
    <div className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("teacherPageLandingTitle")}</div>
  )
}

export {Title}