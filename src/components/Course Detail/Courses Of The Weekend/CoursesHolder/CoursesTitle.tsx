import React from 'react'
import style from './Courses.module.css'

import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const CoursesTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("RelatedCourses")} </div>
  )
}

export {CoursesTitle}