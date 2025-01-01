import React, { useEffect, useState } from 'react'
import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";

import { ListCardBlogs } from '../studentCurse-Blog/My Courses/Courses Grid/index/CoursesCardsList';
import { ReserveCardsList } from '../studentCurse-Blog/My Reserve/Reserve Grid/index/ReserveCardsList';
import { NavLink } from 'react-router-dom';
import { getCourseReserve } from '../../../core/services/api/getCourseReserveId';
import { TopDashboard } from './Items/TopDashboard';
import { MyCourseAndStatus } from './Items/MyCourseAndStatus';
import { MyReserveAndComment } from './Items/MyReserveAndComment';
import { getProfile } from '../../../core/services/api/getProfileInfo';
import { Color } from 'antd/es/color-picker';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const StudentDashboard = () => {

  const [userReserveCoursesObj, setUserReserveCoursesObj] = useState([])
  const [percentage, setpercentage] = useState("")
  const [user, setuser] = useState({})
  const [isLoading, setisLoading] = useState(true)

  const getCourseReserveCall = async () => {
    const userReserveCoursesRes = await getCourseReserve();
    setUserReserveCoursesObj(userReserveCoursesRes)

    let res = await getProfile()
    setpercentage(res.profileCompletionPercentage)
    setuser(res)
    setisLoading(false)
  }

  useEffect(() => {
      getCourseReserveCall()
  }, [])

  return (
    <Formik>
      {(form) => (
        <div className={style.page} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>

          <TopDashboard user={user}/>
          <MyCourseAndStatus percentage={percentage}/>
          <MyReserveAndComment isLoading={isLoading} userReserveCoursesObj={userReserveCoursesObj} />

        </div>
      )
      }
    </Formik >
  )
}

export { StudentDashboard }