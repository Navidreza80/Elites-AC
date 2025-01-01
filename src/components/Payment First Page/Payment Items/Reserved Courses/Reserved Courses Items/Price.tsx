import React from 'react'
import style from './Items.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Price = ({ cost }) => {

  const { t } = useTranslation();
  return (
    <div className={style.priceHolder}>
      <div className={style.price} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {cost} </div>
      <div className={style.price} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("toman")}</div>
    </div>
  )
}

export { Price }