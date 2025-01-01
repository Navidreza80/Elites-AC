import React from 'react'
import style from './style.module.css'

const Image = (props) => {
  return (
    <div className={style.imageHolder}>
      <img className={style.imageServices} src={props.image} />
    </div>
  )
}

export {Image}