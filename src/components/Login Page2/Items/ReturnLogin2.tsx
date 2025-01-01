import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const ReturnLogin2 = () => {
  const { t } = useTranslation();

  return (

    <div className={styleLogin.returnHolder}>
      <div  data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.return}>
        <NavLink  data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} to="/Auth/Login"> {t("return")} &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnLogin2 }