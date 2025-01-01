import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Status = ({status, isLoading}) => {

  return (
    <div className={style.Status} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
        <div className={style.topS} data-theme={identifier("dark","dark2","green","pink","blue","red")}>وضعیت</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomS}>{status}</div>}
    </div>
  )
}

export {Status}