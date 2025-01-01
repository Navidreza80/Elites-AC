import React from 'react'
import style from './style.module.css'

const Level = ({level}) => {
  return (
    <div className={style.level}>{level}</div>
  )
}

export {Level}