import React from 'react'
import style from './BigText.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const BigText = () => {
  const {t} = useTranslation();

  return (
    <div className={style.bigText} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("TeachLandingBannerBig1")} <br /> {t("TeachLandingBannerBig2")}</div>
  )
}

export {BigText}