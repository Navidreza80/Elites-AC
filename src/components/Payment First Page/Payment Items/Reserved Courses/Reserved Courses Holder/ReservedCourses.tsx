import React, { useEffect, useState } from 'react'
import style from './ReservedCourses.module.css'
import { ReservedTitle } from '../Reserved Courses Items/ReservedTitle'
import { Courses } from '../Reserved Courses Items/Courses'

import { getCourseById } from '../../../../../core/services/api/courseById'
import { getCourseReserve } from '../../../../../core/services/api/getCourseReserveId'
import { getMyCourse } from '../../../../../core/services/api/getMyCourse'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const ReservedCourses = () => {

  const [coursesArr, setcoursesArr] = useState([])
  const getCourses = async () => {
    let res = await getMyCourse()
    setcoursesArr(res.listOfMyCourses)
  }
  useEffect(() => {
    getCourses()
  }, [])
  return (
    <div className={style.reserved} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <div className={style.coursesHolder}>
        {coursesArr.map((item, index) => {
          return (
            <Courses
              reserverDate={item.reserverDate}
              id={item.courseId}
            />
          )

        })}
      </div>
    </div>
  )
}

export { ReservedCourses }