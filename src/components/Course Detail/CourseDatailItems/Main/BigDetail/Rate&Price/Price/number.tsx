import React from 'react'
import { ClipLoader } from 'react-spinners'
import style from './Price.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const Number = ({isLoading, price}) => {
  return (
    <>
        {isLoading ? <ClipLoader /> : <div className={style.number} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{price}</div>}
    </>
  )
}

export {Number}