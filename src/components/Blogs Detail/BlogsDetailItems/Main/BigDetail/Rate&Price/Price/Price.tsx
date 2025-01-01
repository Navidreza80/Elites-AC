import React from 'react'
import style from './Price.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Price = () => {

  const {t} = useTranslation();
  return (
    <div className={style.price}>

        <div className={style.toman} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("toman")}</div>ی
        <div className={style.number} data-theme={identifier("dark","dark2","green","pink","blue","red")}>2،500،000</div>

    </div>
  )
}

export {Price}