import style from "../../../../../Style/studentPanel.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const TopRightTopDashboard = ({ user }) => {

  const { t } = useTranslation();

  return (

    <div className={style.TopRightTopDashboard}>
      <h1 className="DannaM" data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("Hi")} {user.fName} {user.lName}  ، {t("GoodDay")}👋</h1>
      <p className="DannaM" data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("GoodDayDesc")}</p>
    </div>
  )
}

export { TopRightTopDashboard }