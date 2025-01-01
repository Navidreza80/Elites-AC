import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from 'react-router-dom';
import { ReserveCardsList } from '../../../studentCurse-Blog/My Reserve/Reserve Grid/index/ReserveCardsList';
import { TitleHeaderMyReserveList } from './TitleHeaderMyReserveList';
import { HeaderList } from './HeaderList';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const ListMyReserveDashboard = ({userReserveCoursesObj, isLoading}) => {


  return (
      <div className={style.listMyReserveDashboard} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
        <TitleHeaderMyReserveList />
        <HeaderList />
        <ReserveCardsList isLoading={isLoading} userReserveCoursesObj={userReserveCoursesObj} />
      </div>
  )
}

export { ListMyReserveDashboard }