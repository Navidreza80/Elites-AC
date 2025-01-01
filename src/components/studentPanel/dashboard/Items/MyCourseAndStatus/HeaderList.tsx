import style from "./../../../../../Style/studentPanel.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const HeaderList = () => {

  const { t } = useTranslation();

  return (

    <div className={style.headerList} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
      <div className={style.imgList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}># </div>
      <div className={style.nameList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("name")} </div>
      <div className={style.teacherList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("lecturer")}</div>
      <div className={style.dateStartList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("HoldingDate")} </div>
      <div className={style.levelList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("status")} </div>
      <div className={style.eyeList}> </div>
    </div>
  )
}

export { HeaderList }