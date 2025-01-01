import React from 'react'
import { BeatLoader } from 'react-spinners'
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const DateStartNumber = ({isLoading, start}) => {
  return (
    <>
            {isLoading ? <BeatLoader /> : <div className={style.bottomC} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{dateConvertor(start)}</div>}
    </>
  )
}

export {DateStartNumber}