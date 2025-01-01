import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const TitleHeaderMyReserveList = () => {

  const { t } = useTranslation();

  return (
    <div className={style.titleHeaderMyCourseList}>
      <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("MyReservation")}</h1>
      <NavLink to='/Student-Panel/My-Reserve'>{t("ButtonViewAll")}</NavLink>
    </div>
  )
}

export { TitleHeaderMyReserveList }