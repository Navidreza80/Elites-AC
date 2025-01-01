import React, { useEffect, useState } from 'react'
import style from '../../../../../Style/NavBarItems.module.css'
import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi'
import { getCourseById } from '../../../../../core/services/api/courseById'
import { useTranslation } from 'react-i18next'

const ReserveCourses = ({id, reserverDate}) => {
    const [courseDetail, setcourseDetail] = useState({})
    const { t } = useTranslation();
    const getCourseDetail = async () => {
        const Details = await getCourseById(id)
        setcourseDetail(Details)
      }
      useEffect(() => {
        getCourseDetail()
      }, [])
      
    return (
      <div className={style.holderReserve}>
      <img src={courseDetail?.imageAddress && courseDetail?.imageAddress.slice(0, 5) === "https" ? courseDetail?.imageAddress : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} className={style.imgMiniBasket} />
      <div className={style.titleAndPrice}>
        <div className={style.title}>{courseDetail?.title}</div>
        <div className={style.price}> {courseDetail?.cost} {t("toman")} </div>
      </div>
    </div>
    )
}

export {ReserveCourses}