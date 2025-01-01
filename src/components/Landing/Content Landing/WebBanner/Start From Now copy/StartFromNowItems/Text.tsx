import React from 'react'
import style from './Text.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Text = () => {

  const {t} = useTranslation();
  return (
    <div className={style.text}  data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("StartNowBanner1")} <br /> {t("StartNowBanner2")} </div>
  )
}

export {Text}