import { Field, ErrorMessage } from "formik";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPEmailInput = () => {
  const { t } = useTranslation();

  return (
    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-base font-DannaBold text-black pb-1.5">{t("email")}</label>
      <Field data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.input} name="email" placeholder={t("enterEmailReg")} />
      <ErrorMessage name="email" component={"p"} className="error" />
    </div>
  )
}

export { FPEmailInput }