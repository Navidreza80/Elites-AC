import React from 'react'
import style from './ViewsAndDate.module.css'

import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Views = (props) => {

  return (
    <div className={style.views} data-theme={identifier("ViewBlog","ViewBlog2","ViewBlog3","ViewBlog4","ViewBlog5","ViewBlog6")}>{props.views}</div>
  )
}

export {Views}