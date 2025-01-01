import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";

const RememberAndForget = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.RememberAndForget}>
      <div>
        <label  data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} htmlFor="rememberPassInput" >{t("rememberMe")}</label>
        <Field id="rememberPassInput" type="checkbox" name="rememberPass" />
      </div>
      <NavLink data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} to="/Auth/Forget-Password" className={styleLogin.forgetPasswordLogin}> {t("forgetPassword")}</NavLink>
      <ErrorMessage name="rememberPass" component={"p"} className="error" />
    </div>

  )
}

export { RememberAndForget }