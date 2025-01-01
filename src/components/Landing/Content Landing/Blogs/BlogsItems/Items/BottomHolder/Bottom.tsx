import React from 'react'
import style from './Bottom.module.css'
import { Publisher } from './PublisherBlog/Publisher'
import { ViewsAndDateHolder } from './Views&DateHolder/ViewsAndDateHolder'

const Bottom = ({pub, views, date}) => {
  return (
    <div className={style.holder}>
        <ViewsAndDateHolder views={views} date={date}/>
        <Publisher pub={pub} />
    </div>
  )
}

export {Bottom}