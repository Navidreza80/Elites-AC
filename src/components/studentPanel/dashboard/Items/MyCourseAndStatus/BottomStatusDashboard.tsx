import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const BottomStatusDashboard = ({percentage}) => {

  const { t } = useTranslation();

  return (

    <div className={style.bottomStatusDashboard}>
      {percentage != 100 && <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("BottomStatus")}</h1>}
    </div>
  )
}

export { BottomStatusDashboard }