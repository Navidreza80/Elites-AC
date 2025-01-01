import React, { useEffect, useState } from 'react'
import style from './CourseList.module.css'
import { StartNewJourney } from '../Start New Journy/StartNewJourneyHolder/StartNewJourney'
import { CourseListAndFilter } from '../CourseList & Filter/CourseList&FilterHolder/CourseListAndFilter'

import { Sort } from '../../../core/services/api/Sort'
import { motion, useScroll } from "framer-motion";
import { identifier } from '../../../core/services/Functions/ThemeIdentifier'
import { useGlobalState } from '../../../State/State'
const CourseList = () => {

  const [applyFilter, setApplyFilter] = useState(false)
  const [totalCount, setTotalCount] = useState("")
  const [teacherId, setTeacherId] = useState("")
  const [levelId, setLevelId] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [isSearched, setIsSearched] = useState(false)
  const [isCourse, setisCourse] = useGlobalState('isCourse');
  const [categoryId, setcategoryId] = useState([1])
  const [length, setlength] = useState(0)
  const [minValue, set_minValue] = useState("1000");
  const [maxValue, set_maxValue] = useState("100000000");
  const [maxValueBining, setmaxValueBining] = useState()
  const [minValueBining, setminValueBining] = useState()
  const [courseType, setcourseType] = useState("")
  const { scrollYProgress } = useScroll()

  const getMaxValue = async () => {
    let res = await Sort("Cost", "DESC")
    let res2 = await Sort("Cost", "ASC")
    setmaxValueBining(res.courseFilterDtos[0].cost)
    setminValueBining(res2.courseFilterDtos[0].cost)
  }

  useEffect(() => {
    setisCourse(true)
    getMaxValue()
  }, [])
  useEffect(() => {
    return () => {
      setisCourse(false)
    }
  }, [])
  return (
    <div className={style.body}  data-theme={identifier("dark","dark2","green","pink","blue","red")}>
        <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
        <div className={style.courseListHolder}>
        <StartNewJourney />
        <CourseListAndFilter 
          applyFilter={applyFilter}
          setlength={setlength}
          length={length}
          setcourseType={setcourseType}
          courseType={courseType}
          setTeacherId={setTeacherId}
          teacherId={teacherId}
          setApplyFilter={setApplyFilter}
          setTotalCount={setTotalCount}
          totalCount={totalCount}
          levelId={levelId}
          setLevelId={setLevelId}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isSearched={isSearched}
          setIsSearched={setIsSearched}
          setcategoryId={setcategoryId}
          categoryId={categoryId}
          maxValue={maxValue}
          minValue={minValue}
          set_minValue={set_minValue}
          set_maxValue={set_maxValue}
          minValueBining={minValueBining}
          maxValueBining={maxValueBining}
          />
        </div>
    </div>
  )
}

export {CourseList}