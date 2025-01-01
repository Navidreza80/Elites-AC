import React from 'react'
import style from './style.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const Price = (props) => {

  const {t} = useTranslation();
  return (
    <div className={style.price} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{props.price} {t("toman")}</div>
  )
}

export {Price}