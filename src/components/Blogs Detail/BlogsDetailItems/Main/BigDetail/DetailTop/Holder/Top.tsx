import React, { useEffect, useState } from 'react'
import style from './Top.module.css'
import { Status } from '../TopItems/Status'
import { Level } from '../TopItems/Level'
import { Category } from '../TopItems/Category'
import { Teacher } from '../TopItems/Teacher'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
const Top = ({views, teacher, category, date, isLoading}) => {


  return (
    <div className={style.top} data-theme={identifier("dark","dark2","green","pink","blue","red")}>

        <Status views={views} isLoading={isLoading} />
        <Level date={date} isLoading={isLoading}/>
        <Teacher teacher={teacher} isLoading={isLoading}/>
        <Category category={category} isLoading={isLoading}/>
    </div>
  )
}

export { Top}