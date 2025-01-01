import style from "./../../../../Style/studentPanel.module.css";

import { NavLink } from 'react-router-dom';
import { ListMyReserveDashboard } from './MyReserveAndComment/ListMyReserveDashboard';
import { CommentDashboard } from './MyReserveAndComment/CommentDashboard';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";
const MyReserveAndComment = ({userReserveCoursesObj, isLoading}) => {


  return (
    <div className={style.MyReserveAndComment}>
      <ListMyReserveDashboard isLoading={isLoading} userReserveCoursesObj={userReserveCoursesObj}/>
      <CommentDashboard />
    </div>
  )
}

export { MyReserveAndComment }