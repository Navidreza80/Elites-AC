import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Confirm = () => {

  return (

    <div className={styleLogin.buttonHolder}>
      <button data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.button} type="submit">تایید </button>
    </div>
  )
}

export { Confirm }