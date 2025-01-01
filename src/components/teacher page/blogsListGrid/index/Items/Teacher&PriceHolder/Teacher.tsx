import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Teacher = ({teacher}) => {

  return (
    <div className={style.teacher} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{teacher}</div>
  )
}

export {Teacher}