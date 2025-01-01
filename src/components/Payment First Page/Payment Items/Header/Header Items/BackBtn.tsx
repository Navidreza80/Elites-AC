import React from 'react'
import style from './Items.module.css'
import { useTranslation } from 'react-i18next';

const BackBtn = () => {
  const { t } = useTranslation();
  return (
    <>
        <div className={style.backBtn}> {t("payment")} </div>
    </>
  )
}

export {BackBtn}