import style from "../../../../Style/studentPanel.module.css";

import { LeftTopDashboard } from "./TopDashboardItems/LeftTopDashboard";
import { RightTopDashboard } from "./TopDashboardItems/RightTopDashboard";
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";
const TopDashboard = ({user}) => {


  return (
          <div className={style.TopDashboard}>
            <RightTopDashboard user={user}/>
            <LeftTopDashboard user={user}/>
          </div>
  )
}

export { TopDashboard }