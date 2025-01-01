import React from 'react'
import style from './Error.module.css'
import { ErrorImage } from './ErrorImage'
import { ErrorTitle } from './ErrorTitle'
import { ErrorBottun } from './ErrorBottun'

const ErrorPage = () => {
  return (
    <div className={style.errorPage}>
        <ErrorImage />
        <ErrorTitle />
        <ErrorBottun />
    </div>
  )
}

export {ErrorPage}