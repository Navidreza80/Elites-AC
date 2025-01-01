import React from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../../core/services/Functions/DateMiladi';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const LastUpdate = ({lastUpdate}) => {

  const {t} = useTranslation();
  return (
    <div className={style.lastUpdate} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("LastChange")}:{dateConvertor(lastUpdate)}</div>
  )
}

export {LastUpdate}