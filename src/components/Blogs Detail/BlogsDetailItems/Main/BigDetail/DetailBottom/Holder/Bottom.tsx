import React from 'react'
import style from './Bottom.module.css'
import { Likes } from '../BottomItems/Likes'
import { DisLikes } from '../BottomItems/DisLikes'
import { DateEnd } from '../BottomItems/DateEnd'
import { DateStart } from '../BottomItems/DateStart'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const Bottom = ({dislikes, likes}) => {

  return (
    <div className={style.bottom} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <DisLikes dislikes={dislikes} />
      <Likes likes={likes} />
    </div>
  )
}

export { Bottom}