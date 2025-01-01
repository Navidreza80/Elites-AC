
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const NavigateLogin1 = () => {
  const { t } = useTranslation();



  return (

    <div className={styleLogin.navigate}>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("enterPhoneNumber")} </h1>
      </div>
      <div>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}> {t("confirmCodeTitle")}</h1>
        <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin1 }