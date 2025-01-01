import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch';

import { ReserveCardsList } from './Reserve Grid/index/ReserveCardsList';
import { getCourseReserve } from '../../../../core/services/api/getCourseReserveId';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const StudentMyReserve = () => {
    const { t } = useTranslation();
  
    const [userReserveCoursesObj, setUserReserveCoursesObj] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [searchValue, setsearchValue] = useState("")

    const getCourseReserveCall = async () => {
      const userReserveCoursesRes = await getCourseReserve();
      setUserReserveCoursesObj(userReserveCoursesRes)
      setisLoading(false)
    }
  
    useEffect(() => {
      getCourseReserveCall()
    }, [])
    
  return (
    <div className={style.page2}>
        <div className={style.titleHolder}>
            <h1 className={style.titleHeaderTopStudent} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("MyReservation")}</h1>
        </div>
        <div className={style.list} data-theme={identifier("dark","dark2")}> 
        <div className={style.list} data-theme={identifier("dark","dark2","green","pink","blue","red")}> 
            <div className={style.headerList} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
                <div className={style.imgList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}># </div>
                <div className={style.nameList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("name")} </div>
                <div className={style.teacherList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("lecturer")}</div>
                <div className={style.dateStartList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("HoldingDate")} </div>
                <div className={style.dateEndList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("CompletionDate")} </div>
                <div className={style.levelList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("status")}</div>
                <div className={style.eyeList}> </div>
            </div>
            <ReserveCardsList isLoading={isLoading} userReserveCoursesObj={userReserveCoursesObj} />
        </div>
    </div>
    </div>
  )
}

export {StudentMyReserve}