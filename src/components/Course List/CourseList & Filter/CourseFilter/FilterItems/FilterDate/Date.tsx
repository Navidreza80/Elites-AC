import React from 'react'
import style from './Date.module.css'

import { useTranslation } from "react-i18next";
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Date = () => {

  const { t } = useTranslation();
  return (
    <>
          <div className={style.holderIconAndTitle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M18 2V4M6 2V4" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M3 8H21" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <label htmlFor='date' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={style.titleDate}> {t("dateStart-end")} </label>
          </div>
        <input name='date' className={style.date} placeholder={t("dateCourses")} data-theme={identifier("dark","dark2","green","pink","blue","red")} onChange={(e) => {
          setStartDate(e.target.value);
        }}/>
    </>
  )
}

export {Date}