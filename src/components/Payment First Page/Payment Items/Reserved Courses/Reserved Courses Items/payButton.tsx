import React from 'react'
import style from './Items.module.css'

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { PaymentButton } from './payButtonHolder';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const PayButton = ({ id }) => {
  const { t } = useTranslation();
  return (

    <NavLink to={"/Payment-Gateway/" +id} className={style.PaymentHolder}>
      <div className={style.PaymentButton} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} ></div>
      <h1 className={style.PaymentTitle}>{t("payment")}</h1>
    </NavLink>
  )

}

export { PayButton }