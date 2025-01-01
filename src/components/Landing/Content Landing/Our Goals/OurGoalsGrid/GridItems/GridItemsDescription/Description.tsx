import React from 'react'
import style from './Decription.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Description = (props) => {
  const {t} = useTranslation();

  return (
    <div className={style.description}  data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("readyForMarketLandingDesc")}</div>
  )
}

export {Description}