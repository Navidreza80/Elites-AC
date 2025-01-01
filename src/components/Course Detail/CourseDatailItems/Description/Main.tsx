import React from 'react'
import { SyncLoader } from 'react-spinners'
import style from './Description.module.css'
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier'

const Main = ({isLoading, description}) => {
  return (
    <>
        {isLoading ? <SyncLoader /> : <p className={style.paragraph} data-theme={identifier('darkNoBG')}>{description}</p>}
    </>
  )
}

export {Main}