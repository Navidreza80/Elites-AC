import React from 'react'
import style from './style.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const Dislike = (props) => {

  const {t} = useTranslation();
  return (
    <div className={style.dislike} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("Dislikes")}: {props.dissLikeCount}</div>
  )
}

export {Dislike}