import styleLogin from "./../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Input1Login = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-base font-DannaDemiBold text-black pb-3">{t("EmailOrPhoneNumber")} </label>
      <Field data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.input} name="phoneOrGmail" placeholder={t("enterNumber&email")} />
      <ErrorMessage name="phoneOrGmail" component={"p"} className="error" />
    </div>

  )
}

export { Input1Login }