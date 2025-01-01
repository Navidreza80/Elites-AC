import React from 'react'
import style from './Items.module.css'
import figmaCourse from '../../../../../assets/Images/FigmaCourse.png'
import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const Date = ({Date,title}) => {

  return (
    <>
        <h1 className={style.Date} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{title} :  {dateConvertor(Date)} </h1>
    </>
  )
}

export {Date}