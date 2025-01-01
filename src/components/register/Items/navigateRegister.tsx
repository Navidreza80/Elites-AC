import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const NavigateRegister = () => {
  const { t } = useTranslation();


  return (

    <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>{t("enterPhoneNumberReg")} </h1>
      </div>
      <div>
        <div>  </div>
        <h1  data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")} className={styleLogin.textNavigate}>{t("confirmCodeRegister")} </h1>
      </div>
      <div>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")} className={styleLogin.textNavigate}>{t("enterInformationRegister")} </h1>
      </div>
    </div>


  )
}

export { NavigateRegister }