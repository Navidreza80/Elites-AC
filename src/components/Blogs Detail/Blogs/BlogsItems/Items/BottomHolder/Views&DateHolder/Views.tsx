import React from 'react'
import style from './ViewsAndDate.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';

const Views = (props) => {

  return (
    <div className={style.views} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{props.views}</div>
  )
}

export {Views}