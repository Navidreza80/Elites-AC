import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const HeaderRegister = () => {

  return (

    <div className={styleLogin.HeaderLogin}>
      <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-black text-2xl font-DannaBold m-4">وارد کردن اطلاعات شخصی </h1>
      <p data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")} className="text-gray-400 text-sm font-DannaDemiBold">لطفا اطلاعات اولیه خواسته شده را وارد کنید</p>
    </div>
  )
}

export { HeaderRegister }