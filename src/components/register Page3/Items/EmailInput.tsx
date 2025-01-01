import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const EmailInput = () => {

  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-base font-DannaBold text-black pb-3">ایمیل </label>
      <Field data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.input} name="gmail" placeholder="ایمیل خود را وارد کنید" />
      <ErrorMessage name="adress" component={"p"} className="error" />
    </div>
  )
}

export { EmailInput }