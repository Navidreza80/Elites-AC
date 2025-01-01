import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { LevelTitle } from './LevelTitle';
import { LevelCount } from './LevelCount';
const Level = ({date, isLoading}) => {

  
  return (
    <div className={style.Level} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <LevelTitle />
      <LevelCount isLoading={isLoading} date={date} />
    </div>
  )
}

export {Level}