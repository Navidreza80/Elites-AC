import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { PublisherTitle } from './PublisherTitle';
import { PublisherName } from './PublisherName';
const Teacher = ({teacher, isLoading}) => {

  return (
    <div className={style.Teacher} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <PublisherTitle />
      <PublisherName isLoading={isLoading} teacher={teacher} />
    </div>
  )
}

export {Teacher}