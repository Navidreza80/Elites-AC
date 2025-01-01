import React from 'react'
import style from './ModernLearningHolder.module.css'
import { BigText } from '../ModernLearningItems/BigText'
import { SmallText } from '../ModernLearningItems/SmallText'

const ModernLearningHolder = () => {
  return (
    <>
        <div className={style.modernLearning}>
          <BigText />
          <SmallText />
        </div>
    </>
  )
}

export {ModernLearningHolder};