import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { TitleD } from './TitleL';
import { CountL } from './CountL';
const Likes = ({like, isLoading}) => {

  return (
    <div className={style.Status} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <TitleD />
      <CountL isLoading={isLoading} like={like} />
    </div>
  )
}

export {Likes}