import React from 'react'
import style from './../../ItemsHolder.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Status = ({status}) => {


  const ali = () => {
    if(status === "0"){
      return "تایید نشده"
    }
    else if(status === "1"){
      return "تایید شده"
    }
  }
  return (
    <div className={style.status} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{ali()}</div>
  )
}

export {Status}