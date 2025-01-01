import React from 'react'
import style from './Publisher.module.css'

import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Publisher = ({pub}) => {

  return (
    <div className={style.publisher} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{pub}</div>
  )
}

export {Publisher}