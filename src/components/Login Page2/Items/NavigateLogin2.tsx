import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const NavigateLogin2 = () => {
  const { t } = useTranslation();

  return (

    <div className={styleLogin.navigate}>
      <div className={styleLogin.lastSelect}>
        <div className={styleLogin.lastNavigate}>  </div>
        <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("enterPhoneNumber")} </h1>
      </div>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("confirmCodeTitle")} </h1>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin2 }