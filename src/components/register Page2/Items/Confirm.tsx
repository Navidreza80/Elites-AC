import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
import { useTranslation } from "react-i18next";
const Confirm = () => {
  const { t } = useTranslation();

  return (

    <div data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.divRegister}>
      <button data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={styleLogin.button} type="submit">تایید</button>
    </div>

  )
}

export { Confirm }