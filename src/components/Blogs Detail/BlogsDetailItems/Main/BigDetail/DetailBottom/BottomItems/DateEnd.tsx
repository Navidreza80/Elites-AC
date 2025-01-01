import React from 'react'
import style from './style.module.css'
import { useTranslation } from 'react-i18next';

const DateEnd = () => {
  const { t } = useTranslation();
  return (
    <div className={style.Level}>
        <div className={style.topL}>{t("CompletionDate")}</div>
        <div className={style.bottomL}> 29 خرداد 1403</div>
    </div>
  )
}

export {DateEnd}