import style from "../../../../../Style/studentPanel.module.css";

import { TopRightTopDashboard } from "./TopRightTopDashboard";
import { BottomRightTopDashboard } from "./BottomRightTopDashboard";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const RightTopDashboard = ({user}) => {


  return (

    <div className={style.rightTopDashboard}>
      <TopRightTopDashboard user={user} />
      <BottomRightTopDashboard />
    </div>
  )
}

export { RightTopDashboard }