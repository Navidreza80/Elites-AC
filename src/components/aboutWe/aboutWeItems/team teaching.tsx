import React from 'react'
import style from './cardsBlogsListStyle.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const TeamTeaching = (props) => {

  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span className={style.span} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("aboutUsTitle4")}</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("aboutUsDesc6")} </p> 
        <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("aboutUsDesc7")} </p> 
      </div>
    </div>  
  )
}

export {TeamTeaching}