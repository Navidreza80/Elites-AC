import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const DisLikes = ({dislikes}) => {
  const { t } = useTranslation();
  return (
    <div className={style.Teacher} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
        <div className={style.topT} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("DisLikeCount")}</div>
        <div className={style.bottomT} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{dislikes} {t("person")}</div>
    </div>
  )
}

export {DisLikes}