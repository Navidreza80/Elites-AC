import React from 'react'
import style from './style.module.css'

import s from '../Title&courseHolder.module.css'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const Title = ({title}) => {
  const { t } = useTranslation();
  return (
    <div className={s.holderlinkedin}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M2 2H16C17.8856 2 18.8284 2 19.4142 2.58579C20 3.17157 20 4.11438 20 6V12C20 13.8856 20 14.8284 19.4142 15.4142C18.8284 16 17.8856 16 16 16H9" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M10 6.5H16" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M2 17V13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11H6M2 17H6M2 17V22M6 11V17M6 11H9H12M6 17V22" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M6 6.5C6 7.60457 5.10457 8.5 4 8.5C2.89543 8.5 2 7.60457 2 6.5C2 5.39543 2.89543 4.5 4 4.5C5.10457 4.5 6 5.39543 6 6.5Z" stroke="#272727" stroke-width="1.5"/>
      </svg>
      <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}> {t("teacher")} {title}</div>
    </div>
  )
}

export {Title}