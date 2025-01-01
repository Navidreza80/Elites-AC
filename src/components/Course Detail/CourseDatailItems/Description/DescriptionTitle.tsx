import React from 'react'
import style from './Description.module.css'
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier'
import { useTranslation } from 'react-i18next';

const DescriptionTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={style.title} data-theme={identifier('darkNoBG')}> {t("DescCourse")} </div>
  )
}

export {DescriptionTitle}