import React, { useEffect, useState } from 'react'
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch'
import { FavCoursesCardsList } from './Fav Courses Grid/index/FavCoursesCardsList'
import style from "./style.module.css";

import { getFavCourses } from '../../../../core/services/api/getFavCourses';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const StudentMyFavCourses = () => {
  const { t } = useTranslation();
  const [isLoading, setisLoading] = useState(true)
  const [searchValue, setsearchValue] = useState("")
  const [userFavcoursesObj, setuserFavcoursesObj] = useState([])

  const getFavCoursesCall = async () => {
    setisLoading(true)
    const userFavouriteCoursesRes = await getFavCourses();
    setuserFavcoursesObj(userFavouriteCoursesRes.favoriteCourseDto)
    if(searchValue != ""){
      setuserFavcoursesObj(userFavcoursesObj.filter(doc => doc.courseTitle.includes(searchValue)))
    }
    setisLoading(false)
  }

  useEffect(() => {
    getFavCoursesCall()
  }, [])

  useEffect(() => {
    getFavCoursesCall()
  }, [searchValue])
  
  
  return (
    <div className={style.page2}>
      <div className={style.titleHolder}>
        <h1 className={style.titleHeaderTopStudent} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("FavoriteCourses")}</h1>
      </div>
      <StudentPanelSearch setsearchValue={setsearchValue} />
      <div className={style.list} data-theme={identifier("dark","dark2","green","pink","blue","red")}> 
        <div className={style.headerList} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
          <div className={style.imgList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}># </div>
          <div className={style.nameList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("name")} </div>
          <div className={style.teacherList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("lecturer")}</div>
          <div className={style.dateLastUpdate} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("lastChangeDate")} </div>
          <div className={style.viewList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("type")}  </div>
          <div className={style.levelList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("level")} </div>
          <div className={style.eyeList}> </div>
        </div>
        <FavCoursesCardsList userFavcoursesObj={userFavcoursesObj} isLoading={isLoading} />
      </div>
    </div>
  )
}

export {StudentMyFavCourses}