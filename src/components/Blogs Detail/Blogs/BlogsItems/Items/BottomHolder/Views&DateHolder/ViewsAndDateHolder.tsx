import React from 'react'
import style from './ViewsAndDate.module.css'
import { Views } from './Views'
import { Date } from './Date'

const ViewsAndDateHolder = (props) => {
  return (
    <div className={style.holder}>
        <Views views={props.views} />
        <Date date={props.date} />
    </div>
  )
}

export {ViewsAndDateHolder}