import React from 'react'
import style from './Courses.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const CoursesTitle = () => {
  const {t} = useTranslation();

  return (
     <div className={style.holderTitle}>
          <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("CoursesOfTheWeek")}</div>
     </div>
  )
}

export {CoursesTitle}