import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { DateStartTitle } from './DateStartTitle';
import { DateStartNumber } from './DateStartNumber';
const DateStart = ({start, isLoading}) => {

  
  return (
    <div className={style.Category} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <DateStartTitle />
      <DateStartNumber isLoading={isLoading} start={start} />
    </div>
  )
}

export {DateStart}