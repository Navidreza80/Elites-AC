import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const Likes = ({likes}) => {
  const { t } = useTranslation();
  return (
    <div className={style.Status} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
        <div className={style.topS} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("LikeCount")}</div>
        <div className={style.bottomS} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{likes} {t("person")}</div>
    </div>
  )
}

export {Likes}