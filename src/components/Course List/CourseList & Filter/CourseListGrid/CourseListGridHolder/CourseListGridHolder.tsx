import React, { useEffect, useState } from 'react'
import style from './CourseListGridHolder.module.css'
import { TopHolder } from '../CourseListGridItems/Top/TopHolder'
import { CoursesHolder } from '../CourseListGridItems/Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { ChangePageList } from '../ChangePageList/ChangePageList'
import { allCourseList } from '../../../../../core/services/api/AllCourseList'
import { Filter } from '../../../../../core/services/api/Filter'
import { Sort } from '../../../../../core/services/api/Sort'

import { allCourseListSearch } from '../../../../../core/services/api/AllCourseListSearch'


const CourseListGridHolder = ({length, courseType, applyFilter, maxValue, minValue, teacherId, setTotalCount, totalCount, levelId, searchValue, isSearched, categoryId}) => {
  const [clicked, setClicked] = useState(false)
  const [sortModal, setSortModal] = useState(false)
  const [courseList, setCourseList] = useState([]);
  const [pagInation, setPagInation] = useState(1)
  const [sortType, setSortType] = useState("DESC")
  const [col, setCol] = useState("insertDate")
  const [applySort, setapplySort] = useState(false)

  const [isLoading, setisLoading] = useState(true)




  const getFilteredList = async () => {
    setisLoading(true)

    let data = await Filter(teacherId, pagInation, levelId, categoryId, maxValue, minValue, courseType, `&TechCount=${length}`, `&ListTech=${String(categoryId)}`)

    let sortData = await Sort(col, sortType)

    let searchData = await allCourseListSearch(1)

    const allCourses = await allCourseList(pagInation)

    if(applyFilter === true){
      setisLoading(true)
      console.log(minValue, maxValue)
      setCourseList(data.courseFilterDtos)
      setTotalCount(data.totalCount)
      setisLoading(false)
    }
    else if(applyFilter === false && applySort === false){
      setisLoading(true)
      setCourseList(allCourses.courseFilterDtos)
      setTotalCount(allCourses.totalCount)
        if(searchValue != ""){
          setCourseList(searchData.courseFilterDtos.filter(doc => doc.title.includes(searchValue)))
        }
      setisLoading(false)
    }
    else if(applySort === true){
      setisLoading(true)
      setCourseList(sortData.courseFilterDtos)
      setisLoading(false)
    }
  }



  useEffect(() => {
    getFilteredList()
  }, [])
  useEffect(() => {
    getFilteredList()
  }, [pagInation])
  useEffect(() => {
    getFilteredList()
  }, [applyFilter])
  useEffect(() => {
    getFilteredList()
  }, [searchValue])
  useEffect(() => {
    getFilteredList()
  }, [col])
  useEffect(() => {
    getFilteredList()
  }, [sortType])
  useEffect(() => {
    getFilteredList()
  }, [applySort])
  


  return (
    <div className={style.courseListGridHolder}>
      <TopHolder clicked={clicked} setClicked={setClicked} sortModal={sortModal} setSortModal={setSortModal} setSortType={setSortType} setCol={setCol} setapplySort={setapplySort} applySort={applySort}/>
      <CoursesHolder 
      courseList={courseList}
      isLoading={isLoading}
      />
      {isSearched || applySort === false && <ChangePageList setPagInation={setPagInation} pagInation={pagInation} totalCount={totalCount}/>}
    </div>
  )
}

export {CourseListGridHolder}