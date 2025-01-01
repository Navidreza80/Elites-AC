import React from 'react'
import style from './style.module.css'
import { Level } from './Level'
import { Category } from './Category'

const LevelAndCategoryHolder = ({level, category}) => {
  return (
    <div className={style.holder}>
        <Category category={category} />
        <Level level={level} />
    </div>
  )
}

export {LevelAndCategoryHolder}