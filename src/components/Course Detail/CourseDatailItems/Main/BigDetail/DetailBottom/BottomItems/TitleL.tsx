import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import { useTranslation } from 'react-i18next';

const TitleD = () => {
  const { t } = useTranslation();
  return (
    <div className={style.topS} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("LikeCount")}</div>
  )
}

export {TitleD}