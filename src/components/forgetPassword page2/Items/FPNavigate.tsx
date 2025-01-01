
import styleLogin from "../../../Style/list.module.css";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPNavigate = () => {

  return (
    <div className={styleLogin.navigate}>
      <div  className={styleLogin.lastSelect}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>وارد کردن ایمیل </h1>
      </div>
      <div  className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>تایید کد ارسال شده دو مرحله ای </h1>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>(درصورت فعال بودن دو مرحله ای) </h1>
      </div>
    </div>
  )
}

export { FPNavigate }