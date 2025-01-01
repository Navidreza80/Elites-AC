import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Type = (props) => {

  return (
    <div className={style.date} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{props.type}</div>
  )
}

export {Type}