import React from 'react'
import style from './style.module.css'
import { Price } from './Price'
import { Teacher } from './Teacher'

const TeacherAndPriceHolder = (props) => {
  return (
    <div className={style.holder}>
        <Teacher teacher={props.teacher} />
        <Price price={props.price}  />
    </div>
  )
}

export {TeacherAndPriceHolder}