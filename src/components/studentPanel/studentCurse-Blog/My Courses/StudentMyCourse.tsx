import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch';
import { ListCardBlogs } from './Courses Grid/index/CoursesCardsList';
import { ChangePageList } from '../../../blogs/ChangePageList/ChangePageList';

import { useTranslation } from 'react-i18next';
import { getMyCourse } from '../../../../core/services/api/getMyCourse';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const StudentMyCourse = () => {
  const { t } = useTranslation();
  const [searchValue, setsearchValue] = useState("")

  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const myCourses = async () => {
    setisLoading(true)
    let res = await getMyCourse()
    setdata(res.listOfMyCourses)
    if(searchValue != ""){
      setdata(data.filter(doc => doc.courseTitle.includes(searchValue)))
    }
    setisLoading(false)
  }
  useEffect(() => {
    myCourses()
  }, [])
  useEffect(() => {
    myCourses()
  }, [searchValue])
  
  return (
    <div className={style.page2}>
        <div className={style.titleHolder}>
            <h1 className={style.titleHeaderTopStudent} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("myCourse")}</h1>
        </div>
        <StudentPanelSearch setsearchValue={setsearchValue} />
        <div className={style.list} data-theme={identifier("dark","dark2","green","pink","blue","red")}> 
            <div className={style.headerList} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
                <div className={style.imgList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}># </div>
                <div className={style.nameList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("name")} </div>
                <div className={style.teacherList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("lecturer")}</div>
                <div className={style.dateStartList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("HoldingDate")} </div>
                <div className={style.dateEndList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("CompletionDate")} </div>
                <div className={style.levelList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("level")} </div>
                <div className={style.eyeList}> </div>
            </div>
            <ListCardBlogs isLoading={isLoading} data={data} />
            <div className="flex justify-center mt-8">
            </div> 
        </div>
    </div>
  )
}

export {StudentMyCourse}