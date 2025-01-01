import React from 'react'
import style from './style.module.css'
import { Level } from './Level'
import { Category } from './Category'

const LevelAndCategoryHolder = (props) => {
  return (
    <div className={style.holder}>
        <Level level={props.level} />
        <Category category={props.category} />
    </div>
  )
}

export {LevelAndCategoryHolder}