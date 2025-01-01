import React from 'react'
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier'
import style from './Title.module.css'

const Text = ({title}) => {
  return (
    <>
    <div className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{title}</div>
    </>
  )
}

export {Text}