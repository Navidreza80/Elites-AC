import style from "../../../../../Style/studentPanel.module.css";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const ClockDashboard = () => {

  const { t } = useTranslation();

  const [time, setTime] = useState()

  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date()

      const hour = dateObject.getHours()
      const minute = dateObject.getMinutes()

      const currentTime = minute + ' : ' + hour
      
      setTime(currentTime)
    }, 1000)

  }, [])
  

  return (

    <div className={style.clock}>
      <div className={style.icon}></div>
      <div className={style.clockItem}>
        <p className="DannaM" data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("Clock")}</p>
        <h1 className="DannaM" data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{time}</h1>
      </div>
    </div>
  )
}

export { ClockDashboard }