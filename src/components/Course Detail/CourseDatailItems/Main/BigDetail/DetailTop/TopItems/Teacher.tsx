import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { Title } from './Title';
import { Name } from './Name';
const Teacher = ({teacher, isLoading}) => {

  return (
    <div className={style.Teacher} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
        <Title />
        <Name teacher={teacher} isLoading={isLoading} />
    </div>
  )
}

export {Teacher}