import React from 'react'
import style from './style.module.css'

const Category = (props) => {
  return (
    <div className={style.category}>{props.category}</div>
  )
}

export {Category}