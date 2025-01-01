import React from 'react'
import style from './Price.module.css'

import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { Number } from './number';
const Price = ({price, isLoading}) => {

  const {t} = useTranslation();
  return (
    <div className={style.price}>
        <div className={style.toman} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("toman")}</div>
        <Number isLoading={isLoading} price={price} />

    </div>
  )
}

export {Price}