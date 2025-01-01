import React from 'react'
import style from './CourseFilterHolder.module.css'
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const CourseFilterHolder = ({categoryId, setlength, setcourseType, setTeacherId, minValueBining, maxValueBining, maxValue, minValue, set_minValue, set_maxValue, setApplyFilter, applyFilter, setLevelId, setSearchValue, setIsSearched, searchValue, isSearched, setcategoryId}) => {

  return (
    <div className={style.filterHolder} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
      <FilterItemsHolder
      categoryId={categoryId}
      setlength={setlength}
      minValueBining={minValueBining}
      maxValueBining={maxValueBining}
      maxValue={maxValue}
      minValue={minValue}
      set_minValue={set_minValue}
      set_maxValue={set_maxValue}
      setTeacherId={setTeacherId}
      setApplyFilter={setApplyFilter}
      applyFilter={applyFilter}
      setLevelId={setLevelId}
      setSearchValue={setSearchValue}
      setIsSearched={setIsSearched}
      searchValue={searchValue}
      isSearched={isSearched}
      setcategoryId={setcategoryId}
      setcourseType={setcourseType}
      />
    </div>
  )
}

export {CourseFilterHolder}