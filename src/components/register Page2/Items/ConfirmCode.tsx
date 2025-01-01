import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
import { useTranslation } from "react-i18next";
const ConfirmCode = () => {

  const { t } = useTranslation();
  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-base font-DannaBold text-black pb-3">کد تایید </label>
      <Field data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.input} name="verifyCode" placeholder="کد تایید خود را وارد کنید" />
      <ErrorMessage name="verifyCode" component={"p"} className="error" />
    </div>

  )
}

export { ConfirmCode }