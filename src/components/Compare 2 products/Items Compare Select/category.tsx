import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Category = ({ techs, techs2 }) => {
  const {t} = useTranslation();


  return (
    <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>دسته بندی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{techs}</div>

          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{techs2}</div>
        </div>
      </div>
  )
}

export { Category }