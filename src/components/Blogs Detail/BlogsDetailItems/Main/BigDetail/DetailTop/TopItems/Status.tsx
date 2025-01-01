import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { StatusTitle } from './StatusTitle';
import { StatusCount } from './StatusCount';
const Status = ({views, isLoading}) => {

  return (
    <div className={style.Status} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <StatusTitle />
      <StatusCount views={views} isLoading={isLoading} />
    </div>
  )
}

export {Status}