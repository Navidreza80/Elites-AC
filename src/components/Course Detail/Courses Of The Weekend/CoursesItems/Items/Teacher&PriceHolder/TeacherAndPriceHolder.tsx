import React from 'react'
import style from './style.module.css'
import { Price } from './Price'
import { Teacher } from './Teacher'

const TeacherAndPriceHolder = (props) => {
  return (
    <div className={style.holder}>
        <Price price={props.price} />
        <Teacher teacher={props.teacher} />
    </div>
  )
}

export {TeacherAndPriceHolder}