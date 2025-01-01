import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Price = ({ cost, cost2 }) => {
  const {t} = useTranslation();


  return (
    <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>قیمت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{cost}  {t("toman")}</div>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{cost2}  {t("toman")}</div>

        </div>
      </div>
  )
}

export { Price }