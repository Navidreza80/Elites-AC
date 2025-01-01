import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { CountD } from './CountD';
import { TitleD } from './TitleL';
import { TitleL } from './TitleD';
const DisLikes = ({dislike, isLoading}) => {

  return (
    <div className={style.Teacher} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <CountD />
      <TitleL dislike={dislike} isLoading={isLoading} />
    </div>
  )
}

export {DisLikes}