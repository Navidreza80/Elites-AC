import React from 'react'
import style from './Bottom.module.css'
import { Publisher } from './PublisherBlog/Publisher'
import { ViewsAndDateHolder } from './Views&DateHolder/ViewsAndDateHolder'

const Bottom = (props) => {
  return (
    <div className={style.holder}>
        <ViewsAndDateHolder views={props.views} date={props.date} />
        <Publisher pub={props.pub} />
    </div>
  )
}

export {Bottom}