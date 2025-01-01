import styleLogin from "./../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useState } from "react";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";

const Input2login = () => {
  const { t } = useTranslation();

  const [isPass, setisPass] = useState(true)

  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-base font-DannaDemiBold text-black pb-1.5">{t("password")}</label>
      <div className={styleLogin.inputPasswordHolder}>
        <Field type={isPass ? "password" : "text"} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.input} name="password" placeholder={t("enterPasswordPlaceHolder")} />
        <div className={isPass ? styleLogin.inputPasswordC : styleLogin.inputPassword} onClick={() => setisPass(!isPass)}></div>
      </div>
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>

  )
}

export { Input2login }