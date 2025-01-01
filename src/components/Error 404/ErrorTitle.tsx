import React from 'react'
import style from './Error.module.css'
import { useTranslation } from 'react-i18next';

const ErrorTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={style.title}> {t("ErrorTitle404")}</div>
  )
}

export {ErrorTitle}