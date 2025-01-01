import React from 'react'
import style from './CourseFilterHolder.module.css'

import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder';
import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';

const CourseFilterHolder = ({setClicked}) => {

  return (
    <div className={style.filterHolder}  data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
        <FilterItemsHolder setClicked={setClicked} />
    </div>
  )
}

export {CourseFilterHolder}