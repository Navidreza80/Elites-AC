import React from 'react'
import style from './CourseListAndFilter.module.css'
import { CourseListGridHolder } from '../CourseListGrid/CourseListGridHolder/CourseListGridHolder'
import { CourseFilterHolder } from '../CourseFilter/CourseFilterHolder/CourseFilterHolder'

const CourseListAndFilter = ({length, setlength, courseType, setcourseType, applyFilter, minValueBining, maxValueBining,  set_minValue, set_maxValue, maxValue, minValue, setTeacherId, setApplyFilter, teacherId, setTotalCount, totalCount, levelId, setLevelId, searchValue, setSearchValue, isSearched, setIsSearched, categoryId, setcategoryId}) => {
  return (
    <div className={style.CourseListAndFilterHolder}>
      <CourseListGridHolder
        applyFilter={applyFilter}
        length={length}
        teacherId={teacherId}
        setTotalCount={setTotalCount}
        totalCount={totalCount}
        levelId={levelId}
        searchValue={searchValue}
        isSearched={isSearched}
        categoryId={categoryId}
        maxValue={maxValue}
        minValue={minValue}
        courseType={courseType}
      />
      <CourseFilterHolder
        minValueBining={minValueBining}
        maxValueBining={maxValueBining}
        setlength={setlength}
        setcourseType={setcourseType}
        maxValue={maxValue}
        categoryId={categoryId}
        minValue={minValue}
        set_minValue={set_minValue}
        set_maxValue={set_maxValue}
        setTeacherId={setTeacherId} 
        setApplyFilter={setApplyFilter}
        setLevelId={setLevelId}
        applyFilter={applyFilter}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setIsSearched={setIsSearched}
        isSearched={isSearched}
        setcategoryId={setcategoryId}
      />
    </div>
  )
}

export {CourseListAndFilter}