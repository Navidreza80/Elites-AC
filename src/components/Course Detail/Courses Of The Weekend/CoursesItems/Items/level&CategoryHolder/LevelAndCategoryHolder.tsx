import React from 'react'
import style from './style.module.css'
import { Level } from './Level'
import { Category } from './Category'

const LevelAndCategoryHolder = (props) => {
  return (
    <div className={style.holder}>
        <Category category={props.category} />
        <Level level={props.level} />
    </div>
  )
}

export {LevelAndCategoryHolder}