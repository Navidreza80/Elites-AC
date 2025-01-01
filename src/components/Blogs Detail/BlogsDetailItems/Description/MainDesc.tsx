import React from 'react'
import { SyncLoader } from 'react-spinners'
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier'
import style from './Description.module.css'

const MainDesc = ({isLoading, description}) => {
  return (
    <>
            {isLoading ? <SyncLoader /> : <p className={style.paragraph} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{description}</p>}
    </>
  )
}

export {MainDesc}