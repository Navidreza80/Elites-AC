import {  Formik  } from "formik";
import style from "../Style/studentPanel.module.css";
import { StudentGhabRight } from "../components/studentPanel/studentPart/studentRight";
import { StudentGhabLeft } from "../components/studentPanel/studentPart/studentLeft";
import { Outlet } from "react-router-dom";
import { identifier } from "../core/services/Functions/ThemeIdentifier";


const StudentPanelPage = () => {


  return (
        <div className={style.root}>
            <StudentGhabRight />
            <div className={style.left}> 
                <StudentGhabLeft />
                <div className={style.page} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
                  <Outlet />
                </div>
            </div>
        </div>

  )
}

export { StudentPanelPage }