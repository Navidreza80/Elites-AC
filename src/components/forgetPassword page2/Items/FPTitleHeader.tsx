
import styleLogin from "../../../Style/list.module.css";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPTitleHeader = () => {

  return (
    <div className={styleLogin.HeaderLogin}>
      <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-black text-2xl font-DannaBold mt-4 mb-4">رمزعبور جدید!</h1>
      <p data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")} className="text-gray-400 text-sm font-DannaDemiBold">رمزعبور جدید خود را وارد کنید</p>
    </div>
  )
}

export { FPTitleHeader }