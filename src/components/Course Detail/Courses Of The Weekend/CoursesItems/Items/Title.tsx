import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Title = (props) => {

  return (
    <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{props.title}</div>
  )
}

export {Title}