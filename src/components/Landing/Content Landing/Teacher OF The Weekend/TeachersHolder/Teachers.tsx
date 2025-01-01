import React from 'react'
import style from './Teachers.module.css'
import { Right } from '../TeachersItems/Right'
import { Graphic } from '../TeachersItems/Graphic/Graphic'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const Teachers = () => {

  return (
    <div className={style.container} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
        <Right />
        <Graphic />
    </div>
  )
}

export {Teachers}