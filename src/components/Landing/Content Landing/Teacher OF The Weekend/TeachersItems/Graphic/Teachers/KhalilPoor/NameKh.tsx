import React from 'react'
import style from './Teachers.module.css'
import { useTranslation } from 'react-i18next';

const NameKh = () => {
  const {t} = useTranslation();
  return (
    <div className={style.name}>{t("nameKhalilpor")}</div>
  )
}

export {NameKh}