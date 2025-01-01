import React, { useEffect, useState } from 'react'
import style from './CourseDetail.module.css'
import { Main } from '../CourseDatailItems/Main/Main'
import { Description } from '../CourseDatailItems/Description/Description'
import { AllComments } from '../CourseDatailItems/Comments/Holder/AllComments'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'

import { useParams } from 'react-router-dom'
import { getCourseById } from '../../../core/services/api/courseById'
import { getCourseComment } from '../../../core/services/api/getCourseComment'
import { allCourseList } from '../../../core/services/api/AllCourseList'
import { identifier } from '../../../core/services/Functions/ThemeIdentifier'
import { useGlobalState } from '../../../State/State'
const CourseDetail = () => {

  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');
  const [isReserved, setIsReserved] = useGlobalState('isReserved');
  const [isFavourite, setIsFavourite] = useGlobalState('isFavoriteCourse');

  const [courseDetail, setCourseDetail] = useState([])
  const [comments, setComments] = useState([])
  const [related, setrelated] = useState([])
  const [allCourseListt, setallCourseList] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const { id } = useParams();


  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    const res = await getCourseComment(id)
    setCourseDetail(Details)
    setComments(res)
    setDiIsLiked(Details?.currentUserDissLike)
    setIsLiked(Details?.currentUserLike)
    setIsReserved(Details?.isCourseReseve)
    setIsFavourite(Details?.isUserFavorite)
    setDiIsLiked(Details?.currentUserDissLike)

    const list = await allCourseList(1)
    setrelated(list.courseFilterDtos.filter((e) => String(e.technologyList) == String(Details?.techs)))

    console.log(related)

    setisLoading(false)
  }


  useEffect(() => {
    getCourseDetail()
  }, [])

  useEffect(() => {
    getCourseDetail()
  }, [id, isLiked, isReserved, isFavourite])


  return (
    <div className={style.body} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <div className={style.holder}>
        <Main
          isLoading={isLoading}
          dislike={courseDetail?.dissLikeCount}
          like={courseDetail?.likeCount}
          teacher={courseDetail?.teacherName}
          status={courseDetail?.courseStatusName}
          level={courseDetail?.courseLevelName}
          category={courseDetail?.techs}
          title={courseDetail?.title}
          comments={courseDetail?.commentCount}
          rate={courseDetail?.currentRate}
          price={courseDetail?.cost}
          image={courseDetail?.imageAddress}
          start={courseDetail?.startTime}
          end={courseDetail?.endTime}
          id={courseDetail?.courseId}
          userLikeId={courseDetail?.userLikeId}
        />
        <Description description={courseDetail?.describe} isLoading={isLoading} currentUserRateNumber={courseDetail?.currentUserRateNumber} id={id} />
        <AllComments isLoading={isLoading} comments={comments} id={id} title={courseDetail?.title}/>
        <CoursesHolder related={related} />
      </div>
    </div>
  )
}

export { CourseDetail }