import React from 'react'
import style from './style.module.css'
import { Teacher } from './Teacher'
import { ViewAndDateHolder } from './DateAndViewHolder'


const TeacherAndViewAndDateHolder = (props) => {

  return (
    <div className={style.holder}>
        <Teacher teacher={props.teacher} />
        <ViewAndDateHolder view={props.view} date={props.date} />
    </div>
  )
}

export {TeacherAndViewAndDateHolder}