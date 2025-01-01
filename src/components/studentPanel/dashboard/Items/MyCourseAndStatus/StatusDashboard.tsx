import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from "react-router-dom";
import { BottomStatusDashboard } from "./BottomStatusDashboard";
import { TopStatusDashboard } from "./TopStatusDashboard";
import { MiddleStatusDashboard } from "./middleStatusDashboard";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const StatusDashboard = ({percentage}) => {


  return (

    <div className={style.statusDashboard} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <TopStatusDashboard />
      <MiddleStatusDashboard percentage={percentage} />
      <BottomStatusDashboard percentage={percentage} />
    </div>
  )
}

export { StatusDashboard }