import style from "../../../../../Style/studentPanel.module.css";

import { ClockDashboard } from "./ClockDashboard";
import { DateDashboard } from "./DateDashboard";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const BottomRightTopDashboard = () => {


  return (

    <div className={style.BottomRightTopDashboard}>
      <ClockDashboard />
      <DateDashboard />
    </div>
  )
}

export { BottomRightTopDashboard }