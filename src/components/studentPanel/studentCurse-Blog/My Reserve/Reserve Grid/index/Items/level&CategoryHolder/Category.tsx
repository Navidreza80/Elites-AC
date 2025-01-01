import React from 'react'
import style from './style.module.css'

const Category = ({category}) => {
  return (
    <div className={style.category}>{category}</div>
  )
}

export {Category}