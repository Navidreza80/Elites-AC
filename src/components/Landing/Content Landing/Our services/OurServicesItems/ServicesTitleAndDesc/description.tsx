import React from 'react'
import style from '../style.module.css'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Description = (props) => {

  return (
    <div className={style.desc} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{props.desc}</div>
  )
}

export {Description}