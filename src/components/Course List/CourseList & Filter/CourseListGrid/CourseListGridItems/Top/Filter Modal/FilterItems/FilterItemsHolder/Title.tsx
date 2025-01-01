import React from 'react'
import style from './Holder.module.css'

import { useTranslation } from "react-i18next";
import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const Title = ({setClicked}) => {
  const { t } = useTranslation();

  return (
    <div className={style.titleAndClose}>
          <div className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("filter")}</div>
          <div className={style.close} onClick={() => setClicked(false)}></div>
    </div>
  )
}

export {Title}