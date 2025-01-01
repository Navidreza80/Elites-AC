import React from 'react'
import style from './style.module.css'
import { useTranslation } from 'react-i18next';

const DateStart = () => {
  const { t } = useTranslation();
  return (
    <div className={style.Category}>
        <div className={style.topC}>{t("HoldingDate")}</div>
        <div className={style.bottomC}>29 اردیبهشت 1403</div>
    </div>
  )
}

export {DateStart}