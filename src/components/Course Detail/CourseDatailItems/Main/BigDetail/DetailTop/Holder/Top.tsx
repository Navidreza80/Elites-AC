import React from 'react'
import style from './Top.module.css'
import { Status } from '../TopItems/Status'
import { Level } from '../TopItems/Level'
import { Category } from '../TopItems/Category'
import { Teacher } from '../TopItems/Teacher'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
const Top = ({status, teacher, category, level, isLoading}) => {

  return (
    <div className={style.top} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
        <Teacher isLoading={isLoading} teacher={teacher} />
        <Category isLoading={isLoading} category={category} />
        <Level isLoading={isLoading} level={level} />
        <Status isLoading={isLoading} status={status} />
    </div>
  )
}

export { Top}