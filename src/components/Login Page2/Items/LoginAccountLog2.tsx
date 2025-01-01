import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const LoginAccountLog2 = () => {
  const { t } = useTranslation();

  return (

    <div  data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.LoginAccount}>
      <button  type="submit">{t("loginAccount")} </button>
    </div>

  )
}

export { LoginAccountLog2 }