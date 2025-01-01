import React from 'react'
import style from './Items.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const ReservedTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("reservedCourse")}</div>
  )
}

export {ReservedTitle}
