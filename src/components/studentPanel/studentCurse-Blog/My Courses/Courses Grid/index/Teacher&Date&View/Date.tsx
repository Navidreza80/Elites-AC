import React from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Date = (props) => {

  return (
    <div className={style.date} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{dateConvertor(props.date)}</div>
  )
}

export {Date}