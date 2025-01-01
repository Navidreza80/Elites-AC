import React from 'react'
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import { BeatLoader } from 'react-spinners'
import style from './style.module.css'

const LevelCount = ({date, isLoading}) => {
  return (
    <>
    {isLoading ? <BeatLoader /> : <div className={style.bottomL} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{dateConvertor(date)}</div>}
    </>
  )
}

export {LevelCount}