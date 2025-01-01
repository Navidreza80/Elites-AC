import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const TitleHeaderMyCourseList = () => {

  const { t } = useTranslation();

  return (

    <div className={style.titleHeaderMyCourseList}>
      <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("myCourse")}</h1>
      <NavLink to='/Student-Panel/My-courses'>{t("ButtonViewAll")}</NavLink>
    </div>
  )
}

export { TitleHeaderMyCourseList }