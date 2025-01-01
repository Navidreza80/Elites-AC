import React from 'react'
import style from './GridItemsTitle.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const GridItemsTitle = () => {
  const {t} = useTranslation();

  return (
    <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("readyForMarketLanding4")}</div>
  )
}

export {GridItemsTitle}