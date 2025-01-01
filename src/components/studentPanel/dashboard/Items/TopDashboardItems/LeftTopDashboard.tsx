import style from "../../../../../Style/studentPanel.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const LeftTopDashboard = ({user}) => {

  const { t } = useTranslation();

  return (

    <div className={style.leftTopDashboard}>
      <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("HiIAm")}  {user.fName} <br />{user.userAbout} </h1>
    </div>
  )
}

export { LeftTopDashboard }