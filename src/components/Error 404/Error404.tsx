import React from 'react'
import style from './Error.module.css'
import { ErrorImage } from './ErrorImage'
import { ErrorTitle } from './ErrorTitle'
import { ErrorBottun } from './ErrorBottun'

const ErrorPage404 = () => {
  return (
    <div className={style.errorPage}>
        <ErrorImage />
        <ErrorTitle />
        <ErrorBottun />
    </div>
  )
}

export {ErrorPage404}