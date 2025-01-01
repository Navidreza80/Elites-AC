import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { DateEndTitle } from './DateEndTitle';
import { DateEndNumber } from './DateEndNumber';
const DateEnd = ({end, isLoading}) => {

  return (
    <div className={style.Level} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <DateEndTitle />
    <DateEndNumber isLoading={isLoading} end={end} />
    </div>
  )
}

export {DateEnd}