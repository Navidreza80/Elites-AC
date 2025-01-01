import React from 'react'
import style from './ProgrammingLanguagesHolder.module.css'
import { ProgrammingLanguagesItems } from '../ProgrammingLanguagesItems/ProgrammingLanguagesItemsHolder/ProgrammingLanguagesItems'

const ProgrammingLanguagesHolder = () => {
  return (
    <div className={style.holder}>
        <ProgrammingLanguagesItems />
    </div>
  )
}

export {ProgrammingLanguagesHolder}