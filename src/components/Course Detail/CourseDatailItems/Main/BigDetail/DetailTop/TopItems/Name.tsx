import React from 'react'
import { BeatLoader } from 'react-spinners'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import style from './style.module.css'

const Name = ({isLoading, teacher}) => {
  return (
    <>
        {isLoading ? <BeatLoader /> : <div className={style.bottomT} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{teacher}</div>}
    </>
  )
}

export {Name}