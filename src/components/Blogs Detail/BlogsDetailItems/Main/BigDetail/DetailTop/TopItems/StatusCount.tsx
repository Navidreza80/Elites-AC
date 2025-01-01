import React from 'react'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import style from './style.module.css'
import { BeatLoader } from 'react-spinners'

const StatusCount = ({views, isLoading}) => {
  return (
    <>
    {isLoading ? <BeatLoader /> : <div className={style.bottomS} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{views} نفر</div>}
    </>
  )
}

export {StatusCount}