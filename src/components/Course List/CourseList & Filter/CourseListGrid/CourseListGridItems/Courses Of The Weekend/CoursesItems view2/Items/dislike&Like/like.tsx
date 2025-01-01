import React from 'react'
import style from './style.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const Like = (props) => {

  const {t} = useTranslation();
  return (
    <div className={style.like} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("likes")}: {props.like}</div>
  )
}

export {Like}