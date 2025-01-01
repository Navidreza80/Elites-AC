
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const NavLinkRegister = () => {


  return (

    <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
      <div className={styleLogin.lastSelect}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={styleLogin.textNavigate}>وارد کردن شماره تلفن </h1>
      </div>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")} className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>تایید کد ارسال شده </h1>
      </div>
      <div>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")} className={styleLogin.textNavigate}>واردکردن اطلاعات شخصی </h1>
      </div>
    </div>

  )
}

export { NavLinkRegister }