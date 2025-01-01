import React, { useEffect, useState } from 'react'
import style from './Holder.module.css'
import { Title } from './Title'
import { Search } from '../FilterSearch/Search'
import { Category } from '../FilterCategory/Category'
import { Level } from '../FilterLevel/Level'
import { Teacher } from '../FilterTeacher/Teacher'
import { Price } from '../FilterPrice/Price'
import { useTranslation } from "react-i18next";

import { Type } from '../FilterType/Type'

const FilterItemsHolder = ({setlength, categoryId, setcourseType, setTeacherId, minValueBining, maxValueBining, maxValue, minValue, set_minValue, set_maxValue, setcategoryId, setApplyFilter, applyFilter, setLevelId, setSearchValue, setIsSearched, searchValue, isSearched}) => {
  const { t } = useTranslation();
  return (
    <div className={style.holder}>
        <Title />
        <Search setSearchValue={setSearchValue} setIsSearched={setIsSearched} searchValue={searchValue} isSearched={isSearched}/>
        <Category setcategoryId={setcategoryId} />
        <Level setLevelId={setLevelId}/>
        <Teacher setTeacherId={setTeacherId}/>
        <Type setcourseType={setcourseType} />
        <Price 
          minValueBining={minValueBining}
          maxValueBining={maxValueBining}
          maxValue={maxValue}
          minValue={minValue}
          set_minValue={set_minValue}
          set_maxValue={set_maxValue}
        />
        <span className={style.deleteFilter} onClick={() => {
          setApplyFilter(false);
          setTeacherId("")
          setLevelId("")
          setcategoryId([1,2,3,4,5,6,7,8,9,10,11,12,13,14,20,21,22,26,25,27,28,29,30,31,32,33,34,35,36,37])
          set_minValue("1000")
          set_maxValue("1000000000")
          setlength("0")
        }}> {t("deleteFilter")} </span>
        <span className={applyFilter ? style.applyFilter2 : style.applyFilter} onClick={() => {
          setApplyFilter(true)
          setlength(1)
        }}> {t("applyFilter")} </span>

    </div>
  )
}

export {FilterItemsHolder}