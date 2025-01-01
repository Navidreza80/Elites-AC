import React from 'react'
import style from './Bottun.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Bottun = () => {

  const {t} = useTranslation();
  return (
    <div className={style.Button}  data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}> {t("NewCourses")} </div>
  )
}

export {Bottun};