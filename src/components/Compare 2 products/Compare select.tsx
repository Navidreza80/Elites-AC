import style from "../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import { Search } from './Items Compare Select/Serach';
import { Image } from './Items Compare Select/Image';
import { Title } from './Items Compare Select/title';
import { Discription } from './Items Compare Select/Discription';
import { Price } from './Items Compare Select/Cost';
import { Like } from './Items Compare Select/Like';
import { Status } from './Items Compare Select/status';
import { Category } from './Items Compare Select/category';
import { Level } from './Items Compare Select/Level';
import { TeacherName } from './Items Compare Select/TeacherName';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { getCourseById } from '../../core/services/api/courseById'
import { getCourseComment } from '../../core/services/api/getCourseComment'
import { allCourseList } from '../../core/services/api/AllCourseList'
import { identifier } from "../../core/services/Functions/ThemeIdentifier";
import { useGlobalState } from "../../State/State";
const CompareSelect = () => {

  const { t } = useTranslation();
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');
  const [isReserved, setIsReserved] = useGlobalState('isReserved');
  const [isFavourite, setIsFavourite] = useGlobalState('isFavoriteCourse');
  const [courseId, setCourseId] = useGlobalState('courseIdCompare');
  const [courseDetail, setCourseDetail] = useState([])
  const [comments, setComments] = useState([])
  const [related, setrelated] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const { id } = useParams();
  const [detailCompare, setdetailCompare] = useState()

  const getCompareDetail = async () => {
    const Detail2 = await getCourseById(courseId)
    setdetailCompare(Detail2)
    console.log(Detail2)
  }

  const getCourseDetail = async () => {
    const Detail = await getCourseById(id)
    setCourseDetail(Detail)
  }

  useEffect(() => {
    getCourseDetail()
  }, [])

  useEffect(() => {
    getCompareDetail()
  }, [courseId])

  useEffect(() => {
    return () => {
      setdetailCompare(null)
    }
  }, [])
  


  return (
    <div className={style.Holder} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <Image Image2={detailCompare?.imageAddress} Image={courseDetail?.imageAddress} />
      <Title title2={detailCompare?.title} title={courseDetail?.title}/>
      <Discription discription2={detailCompare?.describe} discription={courseDetail?.describe} />
      <Price cost2={detailCompare?.cost} cost={courseDetail?.cost}/>
      <Like like2={detailCompare?.likeCount} like={courseDetail?.likeCount}/>
      <Status status2={detailCompare?.courseStatusName} status={courseDetail?.courseStatusName}/>
      <Level level2={detailCompare?.courseLevelName} level={courseDetail?.courseLevelName}/>
      <Category techs2={detailCompare?.techs} techs={courseDetail?.techs} />
      <TeacherName teacherName2={detailCompare?.teacherName} teacherName={courseDetail?.teacherName}/>
    </div>
  )
}

export { CompareSelect }