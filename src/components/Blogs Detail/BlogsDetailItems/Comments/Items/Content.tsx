import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';

const Content = ({describe}) => {

  return (
    <div className={style.content} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{describe}</div>
  )
}

export {Content}